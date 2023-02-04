import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const category = "tents";
const dataSource = new ProductData(category);
// console.log(dataSource);
const element = document.querySelector(".product-list");
// console.log(element);
const listing = new ProductList("Tents", dataSource, element);
// console.log(listing);

listing.init();