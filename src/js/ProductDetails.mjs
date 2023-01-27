import {setLocalStorage } from "./utils.mjs";

function productDetailsTemplate(product) {
    return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
        <h2 class="divider">${product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${product.Image}"
          alt="${product.NameWithoutBrand}"
        />
        <p class="product-card__price">$${product.FinalPrice}</p>
        <p class="product__color">${product.Colors[0].ColorName}</p>
        <p class="product__description">
        ${product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
        </div></section>`;
}

function removeClass(thing, className){ //create a function that takes a thing
  thing.classList.remove(className); //and removes the class className from it
};

function addClass(thing, className){ //create a function that takes a thing
  thing.classList.add(className); //and gives a class to the thing
  let timerId = setTimeout(removeClass, 1200, thing, className)//set a timeout to remove the 'shake' class from the thing 1.2 seconds later
};

export default class ProductDetails {
    constructor(productId, dataSource) {
      this.productId = productId;
      this.product = {};
      this.dataSource = dataSource;
    }

    async init() {
        // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
        this.product = await this.dataSource.findProductById(this.productId);
        // once we have the product details we can render out the HTML
        this.renderProductDetails("main");
        // once the HTML is rendered we can add a listener to Add to Cart button
        // Notice the .bind(this). Our callback will not work if we don't include that line. Review the readings from this week on 'this' to understand why.
        

        var element = document.getElementById("addToCart");
        element.addEventListener("click", this.addProductToCart.bind(this));
        
    }

    addProductToCart() {
        setLocalStorage("so-cart", this.product);//add the product to the cart
        var cartIcon = document.querySelector('svg');//find the Cart icon
        addClass(cartIcon, "sproing");//make the cart icon jiggle
    }

// add to cart button event handler
renderProductDetails(selector) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML(
        "afterBegin",
        productDetailsTemplate(this.product)
    );
}
}
