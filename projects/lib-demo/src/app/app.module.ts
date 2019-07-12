import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LandingComponent } from './components/landing/landing.component';
import {FlowstateNgModule} from '../../../flowstate-ng/src/lib/flowstate-ng.module';
import {CardModule} from '../../../flowstate-ng/src/lib/modules/card/card.module';
// import {FlowstateNgModule} from 'flowstate-ng';

const theme = {
  primary: '12, 103, 153',
  accent: '120, 218, 5',
  danger: '241, 59, 6'
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FlowstateNgModule.forRoot(theme),
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
