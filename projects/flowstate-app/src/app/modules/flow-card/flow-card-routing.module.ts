import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CardMainComponent} from './components/card-main/card-main.component';


const routes: Routes = [
  {
    path: '',
    component: CardMainComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowCardRoutingModule {
}
