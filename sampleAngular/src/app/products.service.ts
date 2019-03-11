import { Injectable, Output } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor() {}

  getProducts(): any {
    let productsList: any = localStorage.getItem("products");
    if (productsList !== null) {
      productsList = JSON.parse(productsList);
      return productsList.products;
    } else {
      productsList = {
        products: [
          {
            productId: "P_141",
            productName: "LCD Monitor",
            productType: "Display",
            price: "$125"
          },
          {
            productId: "P_2422",
            productName: "Mechanicle Keyboard",
            productType: "Peripheral",
            price: "$24"
          },
          {
            productId: "P_3433",
            productName: "Memory Card",
            productType: "Storage",
            price: "$104"
          },
          {
            productId: "P_4444",
            productName: "Cat-5e Cable",
            productType: "Cables",
            price: "$10"
          },
          {
            productId: "P_5455",
            productName: "ATX Cabinets",
            productType: "Cabinets",
            price: "$37"
          },
          {
            productId: "P_6466",
            productName: "Gaming Mouse",
            productType: "Peripheral",
            price: "$20"
          },
          {
            productId: "P_7477",
            productName: "External USB Hard Drive",
            productType: "Storage",
            price: "$70"
          }
        ]
      };
      localStorage.setItem("products", JSON.stringify(productsList));
      return productsList.products;
    }
  }

  updateProducts(productsList) {
    localStorage.setItem("products", JSON.stringify({"products":productsList}));
  }

  getProductById(productId) {
    let productsList = this.getProducts();
    let output = undefined;
    productsList.forEach(element => {
      if (element.productId === productId) {
        output = element;
      }
    });
    return output;
  }

  createProduct(product) {
    let productsList = this.getProducts();
    productsList.push(product);
    this.updateProducts(productsList);
  }

  updateProduct(productId, product) {
    let products = this.getProducts();
    for(var i=0;i<products.length; i++) {
      if(products[i].productId === productId) {
        products[i] = product;
      }
    }
    this.updateProducts(products);
  }
}
