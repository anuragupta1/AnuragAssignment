import { Component } from '@angular/core';
// We are specifying the html in decorator later we will seperate it
@Component({
    // By convention we start selector by app-<anyname>
    selector: 'app-main',
    templateUrl: './app.component.html'
})

export class AppComponent {
}
