import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './components/card/card.component';
import {CardHeaderComponent} from './components/card-header/card-header.component';
import {CardBodyComponent} from './components/card-body/card-body.component';
import {CardFooterComponent} from './components/card-footer/card-footer.component';
import {CardDirective} from './directives/card.directive';


@NgModule({
  declarations: [
    // Components
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,

    // Directives
    CardDirective
    // Pipes
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,

    // Directives
    // Pipes
  ],
})
export class CardModule {
}
