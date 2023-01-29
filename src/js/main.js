import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const category = "tents";
const dataSource = new ProductData(category);
// console.log(dataSource);
const element = document.querySelector(".product-list");
// console.log(element);
const listing = new ProductList(category, dataSource, element);
// console.log(listing);

listing.init();