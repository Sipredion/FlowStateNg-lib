import {ModuleWithProviders, NgModule} from '@angular/core';
import {FlowstateNgComponent} from './components/flowstate-ng.component';
import {FlowstateNgService} from './services/flowstate-ng.service';
import {FlowTheme} from './models/theme.model';


@NgModule({
  declarations: [
    FlowstateNgComponent,
  ],
  imports: [],
  exports: [
    FlowstateNgComponent,
  ]
})
export class FlowstateNgModule {
  static forRoot(theme: FlowTheme): ModuleWithProviders {
    return {
      ngModule: FlowstateNgModule,
      providers: [FlowstateNgService, {provide: 'theme', useValue: theme}]
    };
  }
}
