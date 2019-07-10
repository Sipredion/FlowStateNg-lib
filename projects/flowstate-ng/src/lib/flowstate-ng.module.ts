import {NgModule} from '@angular/core';
import {FlowstateNgComponent} from './components/flowstate-ng.component';
import {CardComponent} from './components/card/card.component';


@NgModule({
  declarations: [
    FlowstateNgComponent,
    CardComponent
  ],
  imports: [],
  exports: [
    FlowstateNgComponent,
    CardComponent
  ]
})
export class FlowstateNgModule {
}
