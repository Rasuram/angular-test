import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-tabular-data",
  templateUrl: "./tabular-data.component.html",
  styleUrls: ["./tabular-data.component.css"]
})
export class TabularDataComponent implements OnInit {
  productsList: any;

  @Output() editEvent = new EventEmitter<string>();
  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.productsList = this.productsService.getProducts();
  }

  onDelete(productId) {
    const isConfirm = confirm(
      "Are you sure? Do you want to delete the product"
    );
    if (isConfirm) {
      let index = -1;
      for (let i = 0; i < this.productsList.length; i++) {
        if (this.productsList[i].productId === productId) {
          index = i;
        }
      }
      if (index > 0) {
        this.productsList.splice(index, 1);
        this.productsService.updateProducts(this.productsList);
      } else {
        window.alert("Sorry, no product has been found with this product Id");
      }
    }
  }

  onEdit(productId) {
    this.router.navigate([`products/edit/${productId}`]);
  }

  onView(productId) {
    this.router.navigate([`products/view/${productId}`]);
  }
}
