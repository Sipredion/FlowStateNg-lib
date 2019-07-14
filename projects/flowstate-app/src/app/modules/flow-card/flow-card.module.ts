import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowCardRoutingModule } from './flow-card-routing.module';
import { CardMainComponent } from './components/card-main/card-main.component';
import {CardModule} from '../../../../../flowstate-ng/src/lib/modules/card/card.module';


@NgModule({
  declarations: [CardMainComponent],
  imports: [
    CommonModule,
    FlowCardRoutingModule,
    CardModule
  ]
})
export class FlowCardModule { }
