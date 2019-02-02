// help to make module
import { NgModule } from '@angular/core';
// help to load the content on browser
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule} from '@angular/router' ;
import { HttpClientModule } from '@angular/common/http' ;
// Component
import { AppComponent } from './app.component';
import { DetailComponent} from './detail.component';
import { ProductComponent } from './products/product.component';
import { ProductService } from './products/product.service';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { NotFoundComponent } from './shared/NotFound.component';
import { ProductModule } from './products/product.module';
import { MoviesModule } from './movies/movies.module';



// decorator
@NgModule({
// We declare all components & pipes
declarations: [
    AppComponent,
    DetailComponent,

    OrderComponent,
    HomeComponent,
    NotFoundComponent
    ],
// All Module
imports: [ BrowserModule ,

    RouterModule.forRoot([
    // if somebody enters url localhost:4200\products and component loaded will be

    {path: 'orders' , component: OrderComponent},
    {path: 'home' , component: HomeComponent},
     // if somebody enters url localhost:4200, redirect to home component
     // map the exact match pathmatch full meaning
    {path: '' , redirectTo: 'home', pathMatch: 'full'},
    // ** wildcards
    {path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule,
    ProductModule,
    MoviesModule
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
