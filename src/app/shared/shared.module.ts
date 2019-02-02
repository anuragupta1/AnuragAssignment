import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import {CommonModule} from '@angular/common' ;
import { StarComponent } from './star.component';
@NgModule({
    imports: [
      CommonModule,
      FormsModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        CommonModule,
      FormsModule,
      StarComponent
    ]
})
export class SharedModule {

}
