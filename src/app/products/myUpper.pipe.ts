import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
        name: 'myUpper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: String, typeofcase: String) {
        if (typeofcase === 'upper') {
        value = value.toUpperCase();
        return value;
        } else {
            value = value.toLowerCase();
            return value;
        }
    }
}
