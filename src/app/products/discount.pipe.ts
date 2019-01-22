import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    // name of the pipe below is given as discounted.
    name: 'discounted'
})

export class MyDiscountedPipe implements PipeTransform {
   transform(value: number, amountofdiscount: number) {
       value = value - amountofdiscount;
       return value;
   }
}
