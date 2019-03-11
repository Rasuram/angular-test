import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabularDataComponent } from './tabular-data/tabular-data.component';
import { MatTableModule } from '@angular/material';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewComponent } from './product-view/product-view.component'

@NgModule({
  declarations: [
    AppComponent,
    TabularDataComponent,
    ProductFormComponent,
    ProductViewComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
