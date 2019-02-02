import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { MyUpperPipe } from './myupper.pipe';
import { MyDiscountedPipe } from './discount.pipe';
import { MyproductSearchPipe } from './productsearch.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail.component';
import {RouterModule} from '@angular/router' ;
import { SharedModule } from '../shared/shared.module';
import { RouterGuards } from './product.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
      RouterModule.forChild([
        {path: 'products', component: ProductComponent},
        {path: 'products/:id', canActivate: [RouterGuards], component: ProductDetailComponent},
      ])
  ],
  declarations: [
    ProductComponent,
    MyUpperPipe,
    MyDiscountedPipe,
    MyproductSearchPipe,
    ProductDetailComponent
  ],
  providers: [
      ProductService,
      // Router guards is here becoz it acts like service
      RouterGuards
  ]

})
export class ProductModule {

}
