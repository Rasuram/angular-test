import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

 product = {
   productId: "",
   productName: "",
   productType: "",
   price: ""
 };

 isEdit = false;
 productId:any;

  constructor(private router: Router, private activatedrouter: ActivatedRoute, private prodcutsService: ProductsService) { }

  ngOnInit() {
    this.productId = this.activatedrouter.snapshot.paramMap.get("id");
    if(this.productId !== null) {
      this.product = this.prodcutsService.getProductById(this.productId);
      this.isEdit = true;
    }else {
      this.isEdit = false;
    }
  }

  onAddProduct(event) {
    event.preventDefault();
    this.prodcutsService.createProduct(this.product);
    window.alert("Product has been added successfully.");
    this.router.navigate(["/products"]);
  }
  
  onUpdateProduct(event) {
    event.preventDefault();
    this.prodcutsService.updateProduct(this.productId, this.product);
    window.alert("Product has been updated successfully.");
    this.router.navigate(["/products"]);
  }

  onBack(event) {
    this.router.navigate(["/products"]);
  }

}
