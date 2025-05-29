const macarons = [
  { name: "Vanilla", img: "vanilla.jpg", price: 200 },
  { name: "Chocolate", img: "chocolate.jpg", price: 220 },
  { name: "Raspberry", img: "raspberry.jpg", price: 210 },
  { name: "Lemon", img: "lemon.jpg", price: 230 },
  { name: "Pistachio", img: "pistachio.jpg", price: 250 },
  { name: "Salted Caramel", img: "saltedcaramel.jpg", price: 240 },
  { name: "Lavender", img: "lavender.jpg", price: 260 },
  { name: "Rose", img: "rose.jpg", price: 230 },
  { name: "Coffee", img: "coffee.jpg", price: 240 },
  { name: "Matcha", img: "matcha.jpg", price: 250 },
  { name: "Mango", img: "mango.jpg", price: 220 },
  { name: "Blueberry", img: "blueberry.jpg", price: 230 },
  { name: "Strawberry", img: "strawberry.jpg", price: 200 },
  { name: "Orange Blossom", img: "orangeblossom.jpg", price: 260 },
  { name: "Coconut", img: "coconut.jpg", price: 210 },
  { name: "Cherry", img: "cherry.jpg", price: 230 },
  { name: "Hazelnut", img: "hazelnut.jpg", price: 250 },
  { name: "Blackcurrant", img: "blackcurrant.jpg", price: 240 },
  { name: "Tiramisu", img: "tiramisu.jpg", price: 270 },
  { name: "Almond", img: "almond.jpg", price: 220 },
  { name: "Peach", img: "peach.jpg", price: 230 },
  { name: "Mint", img: "mint.jpg", price: 210 },
  { name: "Ginger", img: "ginger.jpg", price: 200 },
  { name: "Green Apple", img: "greenapple.jpg", price: 220 },
  { name: "Pineapple", img: "pineapple.jpg", price: 210 },
  { name: "Red Velvet", img: "redvelvet.jpg", price: 250 },
  { name: "Banana Cream", img: "bananacream.jpg", price: 215 },
{ name: "Caramel Mocha", img: "caramelmocha.jpg", price: 245 },
{ name: "Passion Fruit", img: "passionfruit.jpg", price: 235 },
{ name: "Berry Cheesecake", img: "berrycheesecake.jpg", price: 255 }

];

const macaronMenu = document.getElementById("macaronMenu");

macarons.forEach(macaron => {
  const card = document.createElement("div");
  card.className = "macaron-item";
  card.innerHTML = `
    <img src="${macaron.img}" alt="${macaron.name} Macaron" />
    <h3>${macaron.name}</h3>
    <p class="price">Rs. ${macaron.price}</p>
    <button class="buy-btn" data-macaron="${macaron.name}">Buy Now</button>
  `;
  macaronMenu.appendChild(card);
});

// Handle Buy Now alerts
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("buy-btn")) {
    const name = e.target.getAttribute("data-macaron");
    alert(`You selected to buy: ${name} Macaron!`);
  }
});
