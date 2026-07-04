# PriceWise AI Website

PriceWise AI is a responsive graduation-project website for comparing product prices, tracking price changes, creating alerts, and viewing explainable AI forecasts.

## Run the project

Double-click `run_website.bat`. It starts the supplied model and opens:

`http://127.0.0.1:4173/#order-ai`

The `.pkl` model requires this Python server. Opening `index.html` directly
still displays the interface, but live model predictions will not run.

## Included features

- Premium responsive landing page
- Product search, category filtering, and sorting
- Multi-retailer price comparison dialogs
- Local watchlist and alert persistence
- User dashboard with live SVG charts
- Explainable AI forecast dashboard
- Login and signup demonstration
- Dark and light themes
- Mobile navigation
- Tracking, alerts, and settings pages
- Real Random Forest inference from the supplied 218 MB model
- Automatic engineering of all 40 required model features
- Prediction interval, tree consensus, high-value probability, and driver analysis

Price-comparison pages use realistic demonstration data. The Order AI page
runs the supplied trained model locally.
