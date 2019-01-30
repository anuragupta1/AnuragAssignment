import { Injectable } from '@angular/core' ;
import {IProduct} from './product.model' ;
import {HttpClient} from '@angular/common/http' ;
import {Observable} from 'rxjs' ;

@Injectable ()

// calling the api

export class ProductService {
    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';
    constructor(private _http: HttpClient) {}
    // we can create n number of functions
   getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl) ;
   }
    getProductDetail(id): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);

   }
}

