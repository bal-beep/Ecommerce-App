import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';
import {HttpClientModule  } from "@angular/common/Http";
import { CartService } from './service/cart.service';
import { ProductsService } from './service/products.service';
import { FlterPipe } from './shared/flter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FlterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CartService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
