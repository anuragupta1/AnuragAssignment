import { Component, OnInit } from '@angular/core';
import {IProduct} from './product.model' ;
import {ProductService } from './product.service' ;

// declaration
@Component({
       selector: 'app-prod',
       templateUrl: './product.component.html',
       styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
       constructor(private _productService: ProductService) {
       }
       title: String = '****Product Page ****';
       info: String = 'No. of items Search on the basis of';
       showTable: Boolean = true ;
       showImage: Boolean = false;
       userInput: String = '';
       ImageWidth: Number = 50;
       products: IProduct[] =
       [ ];
       toggleImg(): void {
              this.showImage = !this.showImage;
       }
       OnDataRecieve(message: string): void   {
              // console.log('On Data Recieve');
           this.title = '~~~~~~ProductList~~~~~ is' + message;
       }
       // to consume the data we need hook
       ngOnInit(): void {
              // assigning to products of type IProduct[] this.ProductService.getProducts
              this._productService.getProducts()
                  .subscribe((data) => this.products = data) ;


              }


}














