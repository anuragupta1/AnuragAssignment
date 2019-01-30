import { Pipe , PipeTransform } from '@angular/core' ;
import { IProduct } from './product.model' ;

@Pipe({
name: 'productSearch'
})
export class MyproductSearchPipe implements PipeTransform {
       transform(value: IProduct[] , userData: string) {
        userData = userData ? userData.toLowerCase() : null;
           return userData ? value.filter((product: IProduct) => (
                // tslint:disable-next-line:max-line-length
                (product.productName.toLowerCase ().indexOf(userData)) !== -1 || 
                (product.productCode.toLowerCase().indexOf(userData)) !== -1) ) : value ;

       }
}


