// help to make module
import { NgModule } from '@angular/core';
// help to load the content on browser
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DetailComponent} from './detail.component';
import { ProductComponent } from './products/product.component';
import { FormsModule } from '@angular/forms' ;
import { MyUpperPipe } from './products/myupper.pipe';
import { MyDiscountedPipe } from './products/discount.pipe';
// decorator
@NgModule({
// We declare all components & pipes
declarations: [
    AppComponent,
    DetailComponent,
    ProductComponent,
    MyUpperPipe,
    MyDiscountedPipe
 ],
// All Module
imports: [ BrowserModule ,
    FormsModule
],
// only first component
bootstrap: [ AppComponent ],
// All Services
providers: []
})

export class AppModule {

}