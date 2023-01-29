import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
    constructor(category, dataSource, listElement) {
        // this.category = category;
        this.dataSource = dataSource;
        // console.log(dataSource);
        this.listElement = listElement;
        // console.log(listElement);
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
        // console.log(list);
    } 

    renderList(list) {
        renderListWithTemplate(productCardTemplate, this.listElement, list);

    }
}

function isProductActive (product) { //Method to check if the product is in the list of active products
    const activeProducts = ["880RR", "985RF", "985PR", "344YJ"];
    if(activeProducts.includes(product.Id)) {
    return true;
    } else { return false};
}

function productCardTemplate(product) {
    // console.log(product.Id);
    // isProductActive(product);
    if (isProductActive(product)) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
        src="${product.Image}"
        alt="Image of ${product.Name}"
    />
    <h3 class="card_brand">${product.Brand.Name}</h3>
    <h2 class="card_name>${product.Name}</h2>
    <p class="product-card_price">$${product.FinalPrice}</p></a>
    </li>`;
} else {}
}
