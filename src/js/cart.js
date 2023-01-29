import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  console.log(cartItems);
  // const totalPrice = cartTotaler(cartItems); //compute and display the cart total
  const htmlItems = cartItemTemplate(cartItems);
  document.querySelector(".product-list").innerHTML = htmlItems;
}

function changeClass(thing, fromClassName, toClassName){ //create a function that takes a thing
  thing.classList.remove(fromClassName); //and removes the class className from it
  thing.classList.add(toClassName); // and adds another class
};

function cartTotaler(cartItems) { //function to compute and display the cart total
  let totalPrice = 0;
  const cartFooter = document.querySelector('.cart-footer');
  if(cartItems) {
    totalPrice += cartItems.FinalPrice;
    changeClass(cartFooter, ".hidden", "")
    return totalPrice;
  } else {return}
}

function cartItemTemplate(item) {
  if(item) { 
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
return newItem;
 
} else {
  const newItem = `<p class="cart-card">Your cart is currently empty.</p>`;
  return newItem;
}


}

renderCartContents();

