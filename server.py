"""PriceWise AI local server with the supplied Random Forest model."""
from __future__ import annotations

import json
import sys
import traceback
from datetime import date, datetime
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent

import joblib
import numpy as np

MODEL = joblib.load(ROOT / "model" / "high_value_order_model.pkl")
FEATURES = list(MODEL.feature_names_in_)

CODES = {
    "gender": {"female": 0, "male": 1, "other": 2},
    "country": {"united states": 8, "kenya": 4, "united kingdom": 7, "canada": 1, "germany": 3, "india": 5},
    "segment": {"consumer": 0, "corporate": 1, "small business": 2, "premium": 3},
    "category": {"electronics": 2, "fashion": 3, "home": 4, "beauty": 0, "sports": 6, "books": 1, "other": 5},
    "payment": {"credit card": 1, "debit card": 2, "mobile money": 3, "paypal": 4, "bank transfer": 0, "cash": 5},
    "device": {"desktop": 0, "mobile": 1, "tablet": 2},
    "traffic": {"direct": 0, "email": 1, "organic search": 2, "paid ads": 3, "social": 4, "referral": 5},
    "membership": {"bronze": 0, "gold": 1, "platinum": 2, "silver": 3},
    "shipping": {"express": 0, "overnight": 1, "standard": 2},
    "warehouse": {"central": 0, "east": 1, "north": 2, "south": 3, "west": 4},
}


def number(data: dict, key: str, default: float, minimum: float, maximum: float) -> float:
    try:
        value = float(data.get(key, default))
    except (TypeError, ValueError):
        value = default
    return min(max(value, minimum), maximum)


def code(group: str, value: object, default: int = 0) -> int:
    return CODES[group].get(str(value).strip().lower(), default)


def season(month: int) -> int:
    if month in (12, 1, 2):
        return 3
    if month in (3, 4, 5):
        return 1
    if month in (6, 7, 8):
        return 2
    return 0


def prepare_features(data: dict) -> tuple[np.ndarray, dict]:
    try:
        requested_date = datetime.strptime(str(data.get("order_date", "2025-06-20")), "%Y-%m-%d").date()
    except ValueError:
        requested_date = date(2025, 6, 20)
    model_date = min(max(requested_date, date(2023, 1, 1)), date(2025, 12, 31))

    unit_price = number(data, "unit_price", 149.99, 1, 5000)
    quantity = int(number(data, "quantity", 2, 1, 9))
    discount_percent = number(data, "discount_percent", 10, 0, 40)
    shipping_cost = number(data, "shipping_cost", 9.99, 0, 50)
    tax_percent = number(data, "tax_percent", 8, 0, 30)
    margin_percent = number(data, "profit_margin_percent", 24, 3, 55)

    gross = unit_price * quantity
    discount_amount = gross * discount_percent / 100
    taxable = max(gross - discount_amount, 0)
    tax_amount = taxable * tax_percent / 100
    checkout = taxable + shipping_cost + tax_amount
    profit_amount = taxable * margin_percent / 100
    high_value = 1 if checkout >= 500 else 0

    values = {
        "Order_ID": 615000, "Customer_ID": 4300,
        "Order_Date": (model_date - date(2023, 1, 1)).days + 1,
        "Year": model_date.year, "Month": model_date.month, "Day": model_date.day,
        "Day_Of_Week": model_date.weekday(), "Quarter": ((model_date.month - 1) // 3) + 1,
        "Customer_Age": int(number(data, "customer_age", 34, 18, 75)),
        "Customer_Gender": code("gender", data.get("gender", "female")),
        "Country": code("country", data.get("country", "kenya"), 4), "City": 4,
        "Customer_Segment": code("segment", data.get("segment", "consumer")),
        "Product_ID": 1250, "Product_Category": code("category", data.get("category", "electronics"), 2),
        "Product_Subcategory": 16, "Brand": 4, "Unit_Price": unit_price, "Quantity": quantity,
        "Discount_Percent": discount_percent, "Discount_Amount": discount_amount,
        "Coupon_Used": 1 if data.get("coupon_used", False) else 0,
        "Shipping_Cost": shipping_cost, "Tax_Amount": tax_amount,
        "Payment_Method": code("payment", data.get("payment_method", "credit card"), 1),
        "Device_Type": code("device", data.get("device_type", "mobile"), 1),
        "Traffic_Source": code("traffic", data.get("traffic_source", "organic search"), 2),
        "Membership_Status": code("membership", data.get("membership", "silver"), 3),
        "Shipping_Method": code("shipping", data.get("shipping_method", "standard"), 2),
        "Warehouse_Region": code("warehouse", data.get("warehouse_region", "central")),
        "Delivery_Days": int(number(data, "delivery_days", 4, 1, 12)),
        "Order_Status": 2, "Returned": 0,
        "Review_Rating": number(data, "review_rating", 4.2, 1, 5),
        "Customer_Lifetime_Value": number(data, "customer_lifetime_value", 2500, 20, 50000),
        "Profit_Margin_Percent": margin_percent, "Profit_Amount": profit_amount,
        "Season": season(model_date.month), "Holiday_Season": 1 if data.get("holiday_season", False) else 0,
        "High_Value_Order": high_value,
    }
    vector = np.asarray([[values[name] for name in FEATURES]], dtype=np.float64)
    return vector, {
        "gross": gross, "discount": discount_amount, "tax": tax_amount,
        "shipping": shipping_cost, "checkout": checkout,
        "date_adjusted": model_date != requested_date,
    }


def predict(data: dict) -> dict:
    vector, context = prepare_features(data)
    predictions = np.asarray([tree.predict(vector)[0] for tree in MODEL.estimators_], dtype=float)
    predicted, spread = float(predictions.mean()), float(predictions.std())
    lower, upper = max(0, predicted - 1.645 * spread), predicted + 1.645 * spread
    confidence = max(55.0, min(98.0, 100.0 - spread / max(abs(predicted), 1) * 100))
    feature_value = lambda name: float(vector[0][FEATURES.index(name)])
    return {
        "prediction": round(predicted, 2),
        "interval": {"lower": round(lower, 2), "upper": round(upper, 2)},
        "confidence": round(confidence, 1),
        "high_value_probability": round(float((predictions >= 500).mean()) * 100, 1),
        "is_high_value": predicted >= 500,
        "checkout_baseline": round(context["checkout"], 2),
        "model_delta": round(predicted - context["checkout"], 2),
        "components": {key: round(context[key], 2) for key in ("gross", "discount", "shipping", "tax")},
        "top_factors": [
            {"name": "Tax amount", "share": 75.65, "value": feature_value("Tax_Amount")},
            {"name": "High-value indicator", "share": 9.48, "value": feature_value("High_Value_Order")},
            {"name": "Profit amount", "share": 5.07, "value": feature_value("Profit_Amount")},
            {"name": "Customer lifetime value", "share": 3.25, "value": feature_value("Customer_Lifetime_Value")},
            {"name": "Unit price", "share": 1.84, "value": feature_value("Unit_Price")},
        ],
        "date_adjusted": context["date_adjusted"],
        "model": {"name": "High Value Order Random Forest", "algorithm": "RandomForestRegressor", "trees": len(MODEL.estimators_), "features": len(FEATURES), "sklearn_version": "1.6.1"},
    }


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_json(self, payload: object, status: int = 200) -> None:
        body = json.dumps(payload).encode()
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self) -> None:
        if self.path == "/api/health":
            self.send_json({"status": "ok", "model_loaded": True, "features": len(FEATURES)})
        elif self.path == "/api/model-info":
            self.send_json({"name": "High Value Order Random Forest", "algorithm": type(MODEL).__name__, "trees": len(MODEL.estimators_), "features": len(FEATURES), "training_version": "scikit-learn 1.6.1"})
        else:
            super().do_GET()

    def do_POST(self) -> None:
        if self.path != "/api/predict":
            self.send_json({"error": "Not found"}, HTTPStatus.NOT_FOUND)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length > 100_000:
                self.send_json({"error": "Request too large"}, HTTPStatus.REQUEST_ENTITY_TOO_LARGE)
                return
            self.send_json(predict(json.loads(self.rfile.read(length) or b"{}")))
        except Exception as exc:
            traceback.print_exc()
            self.send_json({"error": "Prediction failed", "detail": str(exc)}, HTTPStatus.BAD_REQUEST)


if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=4173)
    args = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), Handler)
    print(f"PriceWise AI running at http://127.0.0.1:{args.port}")
    print(f"Model loaded: {type(MODEL).__name__} · {len(MODEL.estimators_)} trees · {len(FEATURES)} features")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
