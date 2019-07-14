import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempLandingComponent } from './components/temporary/temp-landing/temp-landing.component';
import { TempNavComponent } from './components/temporary/temp-nav/temp-nav.component';
import {FlowstateNgModule} from '../../../flowstate-ng/src/lib/flowstate-ng.module';

const theme = {
  primary: '12, 103, 153',
  accent: '95, 176, 4',
  danger: '241, 59, 6',
};

@NgModule({
  declarations: [
    AppComponent,
    TempLandingComponent,
    TempNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlowstateNgModule.forRoot(theme),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
