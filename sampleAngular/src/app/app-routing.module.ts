import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { TabularDataComponent } from "./tabular-data/tabular-data.component";
import { ProductViewComponent } from "./product-view/product-view.component";

const routes: Routes = [
  { path: "products", component: TabularDataComponent },
  { path: "products/view/:id", component: ProductViewComponent },
  { path: "products/add", component: ProductFormComponent },
  { path: "products/edit/:id", component: ProductFormComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
