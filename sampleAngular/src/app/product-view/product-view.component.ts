import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "../products.service";

@Component({
  selector: "app-product-view",
  templateUrl: "./product-view.component.html",
  styleUrls: ["./product-view.component.css"]
})
export class ProductViewComponent implements OnInit {
  productId = undefined;
  product = undefined;
  constructor(
    private router: Router,
    private activatedrouter: ActivatedRoute,
    private prodcutsService: ProductsService
  ) {}

  ngOnInit() {
    this.productId = this.activatedrouter.snapshot.paramMap.get("id");
    if (this.productId !== null) {
      this.product = this.prodcutsService.getProductById(this.productId);
      console.log(this.product);
    } else {
      window.alert(
        "Sorry!, no product has been found with product Id: " + this.productId
      );
    }
  }

  
  onBack(event) {
    this.router.navigate(["/products"]);
  }

}
