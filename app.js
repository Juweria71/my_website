const products = [
  {
    id: "sony",
    name: "Sony WH-1000XM5",
    category: "audio",
    brand: "Sony",
    icon: "🎧",
    rating: 4.8,
    reviews: 1842,
    price: 299.99,
    oldPrice: 379.99,
    discount: 21,
    store: "Amazon",
    change: -8,
    confidence: 93,
    recommendation: "Buy now",
    forecast: [299, 294, 289, 286, 282, 279],
    history: [379, 369, 349, 359, 339, 329, 319, 309, 299],
    signals: [],
    offers: [
      ["Amazon", 299.99, "Free delivery"],
      ["Best Buy", 319.99, "Pickup today"],
      ["Walmart", 324, "2-day delivery"]
    ]
  },

  {
    id: "iphone",
    name: "Apple iPhone 15 · 128GB",
    category: "phones",
    brand: "Apple",
    icon: "📱",
    rating: 4.7,
    reviews: 2631,
    price: 799,
    oldPrice: 849,
    discount: 6,
    store: "Best Buy",
    change: -2,
    confidence: 88,
    recommendation: "Wait 12–18 days",
    forecast: [793, 785, 778, 768, 759, 749],
    history: [849, 829, 819, 809, 799],
    signals: [],
    offers: [
      ["Best Buy", 799, "Pickup available"],
      ["Amazon", 809, "Free delivery"],
      ["Walmart", 819, "Delivery tomorrow"]
    ]
  },

  {
    id: "macbook",
    name: "MacBook Air M3 · 13-inch",
    category: "computers",
    brand: "Apple",
    icon: "💻",
    rating: 4.9,
    reviews: 978,
    price: 999,
    oldPrice: 1099,
    discount: 9,
    store: "Amazon",
    change: -5,
    confidence: 79,
    recommendation: "Good price",
    forecast: [999, 995, 991, 988, 984, 980],
    history: [1099, 1079, 1049, 1029, 999],
    signals: [],
    offers: [
      ["Amazon", 999, "Free delivery"],
      ["Best Buy", 1049, "Pickup available"]
    ]
  },

  {
    id: "watch",
    name: "Apple Watch Series 9 · 45mm",
    category: "wearables",
    brand: "Apple",
    icon: "⌚",
    rating: 4.6,
    reviews: 1204,
    price: 329,
    oldPrice: 429,
    discount: 23,
    store: "Walmart",
    change: -12,
    confidence: 91,
    recommendation: "Buy now",
    forecast: [329, 327, 330, 326, 328, 325],
    history: [429, 419, 399, 389, 369, 349],
    signals: [],
    offers: [
      ["Walmart", 329, "Free delivery"],
      ["Amazon", 339, "Free delivery"]
    ]
  },

  {
    id: "tv1",
    name: "Samsung Smart TV 55-inch",
    category: "smarttv",
    brand: "Samsung",
    icon: "📺",
    rating: 4.8,
    reviews: 1500,
    price: 599,
    oldPrice: 799,
    discount: 25,
    store: "Amazon",
    change: -5,
    confidence: 90,
    recommendation: "Buy now",
    forecast: [599, 590, 585, 580, 575, 570],
    history: [799, 749, 699, 649, 599],
    signals: [],
    offers: [
      ["Amazon", 599, "Free delivery"],
      ["Best Buy", 629, "Pickup available"]
    ]
  },

  {
    id: "camera1",
    name: "Canon EOS R50 Camera",
    category: "cameras",
    brand: "Canon",
    icon: "📷",
    rating: 4.7,
    reviews: 980,
    price: 799,
    oldPrice: 899,
    discount: 11,
    store: "Best Buy",
    change: -3,
    confidence: 85,
    recommendation: "Wait a few days",
    forecast: [799, 790, 785, 780, 775, 770],
    history: [899, 879, 859, 839, 799],
    signals: [],
    offers: [
      ["Best Buy", 799, "Pickup today"],
      ["Amazon", 809, "Free delivery"]
    ]
  },

  {
    id: "gaming1",
    name: "PlayStation 5 Console",
    category: "gaming",
    brand: "Sony",
    icon: "🎮",
    rating: 4.9,
    reviews: 3000,
    price: 499,
    oldPrice: 549,
    discount: 9,
    store: "Amazon",
    change: -2,
    confidence: 88,
    recommendation: "Good price",
    forecast: [499, 495, 492, 489, 485, 480],
    history: [549, 529, 519, 509, 499],
    signals: [],
    offers: [
      ["Amazon", 499, "Free delivery"],
      ["Walmart", 509, "Delivery tomorrow"]
    ]
  },

  {
    id: "tablet1",
    name: "iPad Air M2",
    category: "tablets",
    brand: "Apple",
    icon: "📱",
    rating: 4.8,
    reviews: 1400,
    price: 699,
    oldPrice: 749,
    discount: 7,
    store: "Apple Store",
    change: -1,
    confidence: 82,
    recommendation: "Wait",
    forecast: [699, 695, 690, 688, 685, 680],
    history: [749, 739, 729, 719, 699],
    signals: [],
    offers: [
      ["Apple Store", 699, "Free engraving"],
      ["Amazon", 709, "Free delivery"]
    ]
  },

  {
    id: "laptop1",
    name: "Dell XPS 15",
    category: "laptops",
    brand: "Dell",
    icon: "💻",
    rating: 4.8,
    reviews: 1200,
    price: 1299,
    oldPrice: 1499,
    discount: 13,
    store: "Dell",
    change: -4,
    confidence: 87,
    recommendation: "Buy now",
    forecast: [1299, 1285, 1270, 1260, 1250, 1240],
    history: [1499, 1450, 1399, 1349, 1299],
    signals: [],
    offers: [
      ["Dell", 1299, "Free shipping"],
      ["Amazon", 1349, "Free delivery"]
    ]
  },

  {
    id: "appliance1",
    name: "LG Smart Refrigerator",
    category: "appliances",
    brand: "LG",
    icon: "🧊",
    rating: 4.6,
    reviews: 700,
    price: 1599,
    oldPrice: 1899,
    discount: 16,
    store: "Home Depot",
    change: -6,
    confidence: 84,
    recommendation: "Buy now",
    forecast: [1599, 1580, 1560, 1540, 1520, 1500],
    history: [1899, 1849, 1799, 1699, 1599],
    signals: [],
    offers: [
      ["Home Depot", 1599, "Free installation"],
      ["Best Buy", 1649, "Free delivery"]
    ]
  }
];

let tracked = JSON.parse(localStorage.getItem("pricewise-tracked") || '["sony","iphone","watch"]');
let alerts = JSON.parse(localStorage.getItem("pricewise-alerts") || '[{"product":"sony","type":"Target price","target":"$275.00"},{"product":"watch","type":"Percentage drop","target":"10%"}]');
const qs = s => document.querySelector(s), qsa = s => [...document.querySelectorAll(s)];

function saveState(){localStorage.setItem("pricewise-tracked",JSON.stringify(tracked));localStorage.setItem("pricewise-alerts",JSON.stringify(alerts))}
function money(n){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:n%1?2:0}).format(n)}
function toast(message){const el=document.createElement("div");el.className="toast";el.innerHTML=`<b>✓</b> ${message}`;qs("#toastRegion").append(el);setTimeout(()=>el.remove(),3200)}
function currentPage(){const hash=(location.hash||"#home").slice(1);return ["home","compare","dashboard","predictions","order-ai","tracking","alerts","settings"].includes(hash)?hash:"home"}

function route(){
  const page=currentPage();
  qsa(".page").forEach(el=>el.classList.toggle("active",el.dataset.page===page));
  qsa("[data-nav]").forEach(el=>el.classList.toggle("active",el.dataset.nav===page));
  qs(".site-footer").style.display=page==="home"?"grid":"none";
  window.scrollTo({top:0,behavior:"instant"});
  if(page==="compare")renderProducts();
  if(page==="dashboard")renderDashboard();
  if(page==="predictions")renderForecast();
  if(page==="tracking")renderTracking();
  if(page==="alerts")renderAlerts();
}

function renderProducts(){
  const query=(qs("#productSearch")?.value||"").toLowerCase();
  const category=qs("#categoryFilter")?.value||"all";
  const sort=qs("#sortProducts")?.value||"recommended";
  let list=products.filter(p=>(category==="all"||p.category===category)&&(`${p.name} ${p.brand} ${p.category}`).toLowerCase().includes(query));
  if(sort==="price-low")list.sort((a,b)=>a.price-b.price);
  if(sort==="discount")list.sort((a,b)=>b.discount-a.discount);
  qs("#resultCount").textContent=`${list.length} product${list.length===1?"":"s"} found`;
  qs("#productGrid").innerHTML=list.length?list.map(p=>`
    <article class="product-card">
      <div class="product-visual">${p.icon}</div>
      <div>
        <div class="product-tags"><span>${p.category.toUpperCase()}</span><span>${p.offers.length} STORES</span></div>
        <h3>${p.name}</h3><div class="rating">★★★★★ <small>${p.rating} (${p.reviews.toLocaleString()})</small></div>
        <div class="card-price-row"><div><small>Best verified price</small><strong>${money(p.price)}</strong></div><span class="discount">Save ${p.discount}%</span></div>
        <div class="product-card-actions"><button data-details="${p.id}">View details</button><button class="primary ${tracked.includes(p.id)?"tracked":""}" data-track="${p.id}">${tracked.includes(p.id)?"✓ Tracking":"+ Track price"}</button></div>
      </div>
    </article>`).join(""):`<div class="panel"><h3>No products found</h3><p>Try a different product name or category.</p></div>`;
  qsa("[data-details]").forEach(b=>b.onclick=()=>openProduct(b.dataset.details));
  qsa("[data-track]").forEach(b=>b.onclick=()=>toggleTracking(b.dataset.track));
}

function toggleTracking(id){
  const product=products.find(p=>p.id===id);
  if(tracked.includes(id)){tracked=tracked.filter(x=>x!==id);toast(`${product.name} removed from tracking`)}
  else{tracked.push(id);toast(`${product.name} is now being tracked`)}
  saveState();renderProducts();updateBadges();
}
function updateBadges(){qsa("#trackingBadge").forEach(e=>e.textContent=tracked.length);if(qs("#trackedCount"))qs("#trackedCount").textContent=tracked.length}

function openProduct(id){
  const p=products.find(x=>x.id===id), dialog=qs("#productDialog");
  qs("#productDialogContent").innerHTML=`
    <div class="dialog-product-top"><div class="dialog-visual">${p.icon}</div><div><span class="page-kicker">${p.category.toUpperCase()} · ${p.offers.length} VERIFIED STORES</span><h2>${p.name}</h2><p>Current best price <b>${money(p.price)}</b> · ${p.discount}% below listed price</p></div></div>
    <div class="forecast-decision"><span>✦</span><div><b>AI recommendation: ${p.recommendation}</b><p>${p.confidence}% confidence based on historical movement and current retailer spread.</p></div></div>
    <div class="dialog-offers">${p.offers.map((o,i)=>`<div class="dialog-offer"><div><b>${o[0]}</b><small>${o[2]} · ${i===0?"Best price":"Verified today"}</small></div><strong>${money(o[1])}</strong><a href="#" data-demo-buy>View deal</a></div>`).join("")}</div>`;
  dialog.showModal();qsa("[data-demo-buy]").forEach(a=>a.onclick=e=>{e.preventDefault();toast("Demo link — connect a retailer URL in the production version")});
}

function linePath(values,w=800,h=220,pad=20){
  const min=Math.min(...values),max=Math.max(...values),range=max-min||1;
  return values.map((v,i)=>`${i?"L":"M"} ${pad+i*(w-pad*2)/(values.length-1)} ${pad+(max-v)*(h-pad*2)/range}`).join(" ");
}
function renderDashboard(){
  updateBadges();
  const values=[1460,1435,1450,1410,1390,1402,1360,1375,1340,1310,1325,1290];
  qs("#portfolioChart").innerHTML=`<defs><linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6c5ce7" stop-opacity=".32"/><stop offset="1" stop-color="#6c5ce7" stop-opacity="0"/></linearGradient></defs><g stroke="currentColor" opacity=".08">${[30,85,140,195,250].map(y=>`<line x1="0" x2="800" y1="${y}" y2="${y}"/>`).join("")}</g><path d="${linePath(values,800,240,12)} L 788 240 L 12 240 Z" fill="url(#dashFill)"/><path d="${linePath(values,800,240,12)}" fill="none" stroke="#6c5ce7" stroke-width="4" vector-effect="non-scaling-stroke" stroke-linecap="round"/>`;
  const list=tracked.map(id=>products.find(p=>p.id===id)).filter(Boolean);
  qs("#dashboardTrackedList").innerHTML=list.map(p=>`<div><span class="tracked-icon">${p.icon}</span><span class="tracked-info"><b>${p.name}</b><small>Best at ${p.store}</small></span><span class="tracked-price"><b>${money(p.price)}</b><small>${p.change}% this week</small></span><svg class="mini-spark" viewBox="0 0 70 28"><path d="${linePath(p.history.slice(-5),70,28,2)}" fill="none" stroke="${p.change<0?"#20b486":"#e65b68"}" stroke-width="2"/></svg></div>`).join("")||"<p>No tracked products yet.</p>";
}

function populateSelects(){
  ["#forecastProduct","#alertProduct"].forEach(id=>{const el=qs(id);if(el)el.innerHTML=products.map(p=>`<option value="${p.id}">${p.name}</option>`).join("")});
}
function renderForecast(){
  const id=qs("#forecastProduct")?.value||"iphone",p=products.find(x=>x.id===id);
  qs("#forecastHero").innerHTML=`<div class="forecast-summary"><div class="summary-product"><span class="visual">${p.icon}</span><div><small>${p.category.toUpperCase()}</small><h3>${p.name}</h3></div></div><div class="summary-metric"><small>CURRENT PRICE</small><strong>${money(p.price)}</strong></div><div class="summary-metric"><small>14-DAY ESTIMATE</small><strong class="positive">${money(p.forecast.at(-1))}</strong></div><div class="summary-metric"><small>CONFIDENCE</small><strong>${p.confidence}%</strong></div></div><div class="forecast-decision"><span>✦</span><div><b>${p.recommendation}</b><p>The model combines recent momentum, historical range, seasonality and retailer spread.</p></div></div>`;
  const actual=p.history, pred=[actual.at(-1),...p.forecast],all=[...actual,...p.forecast],w=900,h=300,pad=30,min=Math.min(...all)-15,max=Math.max(...all)+15,range=max-min;
  const point=(v,i,total,start=0)=>[pad+(start+i)*(w-pad*2)/(total-1),pad+(max-v)*(h-pad*2)/range];
  const actualPath=actual.map((v,i)=>`${i?"L":"M"} ${point(v,i,actual.length+p.forecast.length)[0]} ${point(v,i,actual.length+p.forecast.length)[1]}`).join(" ");
  const forecastVals=[actual.at(-1),...p.forecast],start=actual.length-1;
  const predPath=forecastVals.map((v,i)=>`${i?"L":"M"} ${point(v,i,actual.length+p.forecast.length,start)[0]} ${point(v,i,actual.length+p.forecast.length,start)[1]}`).join(" ");
  const upper=forecastVals.map(v=>v+14),lower=forecastVals.map(v=>v-14);
  const area=[...upper.map((v,i)=>point(v,i,actual.length+p.forecast.length,start)),...lower.map((v,i)=>point(v,lower.length-1-i,actual.length+p.forecast.length,start).reverse()).reverse()];
  qs("#forecastChart").innerHTML=`<g stroke="currentColor" opacity=".08">${[30,90,150,210,270].map(y=>`<line x1="30" x2="870" y1="${y}" y2="${y}"/>`).join("")}</g><path d="M ${upper.map((v,i)=>point(v,i,actual.length+p.forecast.length,start).join(" ")).join(" L ")} L ${lower.map((v,i)=>point(v,lower.length-1-i,actual.length+p.forecast.length,start).join(" ")).reverse().join(" L ")} Z" fill="rgba(24,184,201,.13)"/><line x1="${point(actual.at(-1),actual.length-1,actual.length+p.forecast.length)[0]}" x2="${point(actual.at(-1),actual.length-1,actual.length+p.forecast.length)[0]}" y1="25" y2="285" stroke="currentColor" opacity=".15" stroke-dasharray="5 5"/><path d="${actualPath}" fill="none" stroke="#6c5ce7" stroke-width="4" vector-effect="non-scaling-stroke" stroke-linecap="round"/><path d="${predPath}" fill="none" stroke="#18b8c9" stroke-width="4" stroke-dasharray="8 7" vector-effect="non-scaling-stroke" stroke-linecap="round"/><text x="40" y="295" fill="currentColor" opacity=".45" font-size="10">Historical observations</text><text x="650" y="295" fill="currentColor" opacity=".45" font-size="10">Next 14 days</text>`;
  qs("#signalList").innerHTML=p.signals.map(s=>`<div><div class="signal-top"><b>${s[0]}</b><span style="color:${s[3]}">${s[1]}</span></div><div class="signal-bar"><i style="width:${s[2]}%;background:${s[3]}"></i></div><p>${s[4]}</p></div>`).join("");
}

function renderTracking(){
  const list=tracked.map(id=>products.find(p=>p.id===id)).filter(Boolean);
  qs("#fullTrackedList").innerHTML=list.map(p=>`<article class="tracking-card"><div class="tracking-card-top"><span class="visual">${p.icon}</span><span class="discount">${p.change}% this week</span></div><h3>${p.name}</h3><p>Best at ${p.store} · checked 12 min ago</p><div class="tracking-price"><strong>${money(p.price)}</strong><span>${p.discount}% below list</span></div><div class="tracking-actions"><button data-details="${p.id}">Details</button><button data-alert-for="${p.id}">Set alert</button><button class="remove" data-remove="${p.id}">Remove</button></div></article>`).join("")||`<section class="panel"><h3>Your watchlist is empty</h3><p>Compare products and select “Track price” to begin.</p><a class="button primary-button" href="#compare">Find products</a></section>`;
  qsa("[data-details]").forEach(b=>b.onclick=()=>openProduct(b.dataset.details));
  qsa("[data-alert-for]").forEach(b=>b.onclick=()=>openAlert(b.dataset.alertFor));
  qsa("[data-remove]").forEach(b=>b.onclick=()=>{toggleTracking(b.dataset.remove);renderTracking()});
}

function renderAlerts(){
  qs("#activeAlerts").innerHTML=alerts.length?alerts.map((a,i)=>{const p=products.find(x=>x.id===a.product);return `<div class="alert-rule"><span class="alert-rule-icon">${p?.icon||"◎"}</span><div><b>${p?.name||"Product"}</b><small>${a.type}: ${a.target} · Email + browser</small></div><button data-delete-alert="${i}" aria-label="Delete alert">×</button></div>`}).join(""):"<p>No active alerts. Create one to be notified of a better price.</p>";
  qsa("[data-delete-alert]").forEach(b=>b.onclick=()=>{alerts.splice(Number(b.dataset.deleteAlert),1);saveState();renderAlerts();toast("Alert deleted")});
}
function openAlert(id="sony"){qs("#alertProduct").value=id;qs("#alertDialog").showModal()}

function orderFormPayload(form){
  const data=Object.fromEntries(new FormData(form).entries());
  [...form.querySelectorAll('input[type="checkbox"]')].forEach(input=>data[input.name]=input.checked);
  return data;
}

function renderOrderPrediction(result){
  const status=result.is_high_value?"High-value order":"Standard-value order";
  const statusClass=result.is_high_value?"high":"standard";
  qs("#orderPredictionResult").innerHTML=`
    <div class="result-live"><i></i> LIVE MODEL RESULT</div>
    <div class="value-result"><small>PREDICTED ORDER VALUE</small><strong>${money(result.prediction)}</strong><span>90% expected range ${money(result.interval.lower)} – ${money(result.interval.upper)}</span></div>
    <div class="value-status ${statusClass}"><span>${result.is_high_value?"◆":"◇"}</span><div><b>${status}</b><small>${result.high_value_probability}% of trees predict a value above $500</small></div></div>
    <div class="result-metrics"><div><span>Model confidence</span><b>${result.confidence}%</b></div><div><span>Checkout baseline</span><b>${money(result.checkout_baseline)}</b></div><div><span>Model adjustment</span><b class="${result.model_delta>=0?"up":"down"}">${result.model_delta>=0?"+":""}${money(result.model_delta)}</b></div></div>
    <div class="component-stack"><h4>Order composition</h4><div><span>Gross merchandise</span><b>${money(result.components.gross)}</b></div><div><span>Discount</span><b class="down">−${money(result.components.discount)}</b></div><div><span>Shipping</span><b>${money(result.components.shipping)}</b></div><div><span>Tax</span><b>${money(result.components.tax)}</b></div></div>
    <div class="factor-list"><h4>Top model drivers</h4>${result.top_factors.map(f=>`<div><span>${f.name}</span><i><em style="width:${Math.max(f.share,2)}%"></em></i><b>${f.share.toFixed(2)}%</b></div>`).join("")}</div>
    <div class="model-footnote"><span>✦</span><p>Generated by ${result.model.trees} decision trees across ${result.model.features} features. ${result.date_adjusted?"The date was aligned to the model's 2023–2025 training period.":""}</p></div>`;
}

function authMode(signup){
  const d=qs("#authDialog");d.classList.toggle("signup-mode",signup);
  qs("#authTitle").textContent=signup?"Create your free account":"Welcome back";
  qs("#authSubtitle").textContent=signup?"Track up to 10 products free. No card required.":"Log in to view your tracked products and alerts.";
  qs("#authForm button[type=submit]").textContent=signup?"Create account":"Log in";
  qs("#authSwitch").textContent=signup?"Log in instead":"Create an account";
  d.dataset.signup=signup?"true":"false";
}

function init(){
  populateSelects();updateBadges();
  addEventListener("hashchange",route);route();
  qs("#mobileMenuButton").onclick=()=>qs(".main-nav").classList.toggle("open");
  qsa(".main-nav a").forEach(a=>a.onclick=()=>qs(".main-nav").classList.remove("open"));
  qsa(".modal-close").forEach(b=>b.onclick=()=>b.closest("dialog").close());
  qsa("dialog").forEach(d=>d.addEventListener("click",e=>{if(e.target===d)d.close()}));
  qsa(".login-trigger").forEach(b=>b.onclick=()=>{authMode(false);qs("#authDialog").showModal()});
  qsa(".signup-trigger").forEach(b=>b.onclick=()=>{authMode(true);qs("#authDialog").showModal()});
  qs("#authSwitch").onclick=()=>authMode(qs("#authDialog").dataset.signup!=="true");
  qs("#authForm").onsubmit=e=>{e.preventDefault();qs("#authDialog").close();toast(qs("#authDialog").dataset.signup==="true"?"Account created — welcome to PriceWise!":"Logged in successfully");location.hash="dashboard"};
  qs("#themeToggle").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("pricewise-theme",document.body.classList.contains("dark")?"dark":"light");if(qs("#settingsDarkMode"))qs("#settingsDarkMode").checked=document.body.classList.contains("dark")};
  if(localStorage.getItem("pricewise-theme")==="dark")document.body.classList.add("dark");
  qs("#heroSearch").onsubmit=e=>{e.preventDefault();const q=qs("#heroSearchInput").value;location.hash="compare";setTimeout(()=>{qs("#productSearch").value=q;renderProducts()},0)};
  qsa("[data-search]").forEach(b=>b.onclick=()=>{qs("#heroSearchInput").value=b.dataset.search;qs("#heroSearch").requestSubmit()});
  qs("#productSearch").oninput=renderProducts;qs("#categoryFilter").onchange=renderProducts;qs("#sortProducts").onchange=renderProducts;
  qs("#forecastProduct").onchange=renderForecast;
  qs("#createAlertButton").onclick=()=>openAlert();
  qs("#alertForm").onsubmit=e=>{e.preventDefault();const id=qs("#alertProduct").value,type=qs("#alertType").value==="target"?"Target price":"Percentage drop",value=qs("#alertTarget").value;alerts.push({product:id,type,target:type==="Target price"?money(Number(value)):`${value}%`});saveState();qs("#alertDialog").close();renderAlerts();toast("New price alert created")};
  qsa(".save-settings").forEach(b=>b.onclick=()=>toast("Settings saved"));
  qs("#settingsDarkMode").onchange=e=>{document.body.classList.toggle("dark",e.target.checked);localStorage.setItem("pricewise-theme",e.target.checked?"dark":"light")};
  qsa(".round-arrow").forEach(b=>b.onclick=()=>openProduct(b.dataset.product));
  const orderForm=qs("#orderPredictionForm");
  if(orderForm){
    orderForm.onsubmit=async e=>{
      e.preventDefault();
      const button=orderForm.querySelector(".predict-button"),original=button.innerHTML;
      button.disabled=true;button.innerHTML="<span>◌</span><b>Analysing 100 decision trees…</b><small>Engineering 40 model features</small>";
      try{
        const response=await fetch("/api/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(orderFormPayload(orderForm))});
        const result=await response.json();
        if(!response.ok)throw new Error(result.detail||result.error||"Prediction failed");
        renderOrderPrediction(result);toast(`Prediction complete: ${money(result.prediction)}`);
      }catch(error){
        qs("#orderPredictionResult").innerHTML=`<div class="result-placeholder error"><span>!</span><h3>Prediction service unavailable</h3><p>${error.message}. Start the project with <b>run_website.bat</b> so the supplied model can run.</p></div>`;
      }finally{button.disabled=false;button.innerHTML=original}
    };
    qs("#loadPremiumExample").onclick=()=>{
      const values={unit_price:649.99,quantity:2,discount_percent:12,shipping_cost:0,tax_percent:8.25,profit_margin_percent:28,customer_age:41,customer_lifetime_value:8400,segment:"Premium",membership:"Gold",country:"United States",device_type:"Desktop",category:"Electronics",payment_method:"Credit Card",shipping_method:"Express",delivery_days:2,review_rating:4.8,order_date:"2025-11-24"};
      Object.entries(values).forEach(([name,value])=>{const field=orderForm.elements[name];if(field)field.value=value});
      orderForm.elements.coupon_used.checked=true;orderForm.elements.holiday_season.checked=true;toast("Premium order example loaded");
    };
  }
}
document.addEventListener("DOMContentLoaded",init);
function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("image").value;

  let productDiv = document.createElement("div");

  productDiv.innerHTML = `
    <h3>${name}</h3>
    <p>$${price}</p>
    <img src="${image}" width="150">
    <hr>
  `;

  document.getElementById("productList").appendChild(productDiv);

  // clear inputs
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
}
