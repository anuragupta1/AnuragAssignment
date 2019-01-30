// help to make module
import { NgModule } from '@angular/core';
// help to load the content on browser
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' ;
import {RouterModule} from '@angular/router' ;
import { HttpClientModule } from '@angular/common/http' ;

// Component
import { AppComponent } from './app.component';
import { DetailComponent} from './detail.component';
import { ProductComponent } from './products/product.component';

import { MyUpperPipe } from './products/myupper.pipe';
import { MyDiscountedPipe } from './products/discount.pipe';
import { MyproductSearchPipe } from './products/productsearch.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/NotFound.component';



// decorator
@NgModule({
// We declare all components & pipes
declarations: [
    AppComponent,
    DetailComponent,
    ProductComponent,
    MyUpperPipe,
    MyDiscountedPipe,
    MyproductSearchPipe,
    StarComponent,
    OrderComponent,
    HomeComponent,
    ProductDetailComponent,
    NotFoundComponent
    ],
// All Module
imports: [ BrowserModule ,
    FormsModule ,
    RouterModule.forRoot([
    // if somebody enters url localhost:4200\products and component loaded will be
    {path: 'products', component: ProductComponent},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'orders' , component: OrderComponent},
    {path: 'home' , component: HomeComponent},
     // if somebody enters url localhost:4200, redirect to home component
     // map the exact match pathmatch full meaning
    {path: '' , redirectTo: 'home', pathMatch: 'full'},
    // ** wildcards
    {path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule
],
// only first component
bootstrap: [ AppComponent ],
// All Services
providers: [
    ProductService
]
})

export class AppModule {

}
