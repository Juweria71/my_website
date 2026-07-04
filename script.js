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