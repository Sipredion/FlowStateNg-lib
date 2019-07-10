import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LandingComponent } from './components/landing/landing.component';
import {FlowstateNgModule} from '../../../flowstate-ng/src/lib/flowstate-ng.module';
// import {FlowstateNgModule} from 'flowstate-ng';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FlowstateNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
