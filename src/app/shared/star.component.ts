import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
@Component({
    // selector
    selector: 'app-star',
    // template html
    templateUrl: './star.component.html',
    // we have square bracket becoz we could have multiple css here comma separated
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starwidth: number;
    @Input() rating: number;
    @Output() ratingclicked: EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(): void {
        this.starwidth = this.rating * 86 / 6 ;
    }
    starClicked(): void {
      this.ratingclicked.emit(`The rating clicked is ${this.rating}`);
  }
}

