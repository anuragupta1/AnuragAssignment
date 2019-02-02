import {Component , OnInit} from '@angular/core' ;
import {ActivatedRoute, Router} from '@angular/router';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    templateUrl : './product-detail.component.html'

    })
// implements OnInit and import Oninit
export class ProductDetailComponent implements OnInit {
    // param name id
    id: Number;
    details: IProduct[];

    constructor(private _route: ActivatedRoute,
        private _prodService: ProductService,
        private _router: Router) {}

        backProducts(): void {
                this._router.navigate(['/products'] );

        }


      ngOnInit(): void {
        this.id = this._route.snapshot.params['id'] ;
         this._prodService.getProductDetail(this.id)
             .subscribe((item) => this.details = item ) ;
    }

}


