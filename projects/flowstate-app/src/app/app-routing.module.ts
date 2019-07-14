import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TempLandingComponent} from './components/temporary/temp-landing/temp-landing.component';


const routes: Routes = [
  {path: 'home', component: TempLandingComponent},
  {path: 'flow-card', loadChildren: () => import('./modules/flow-card/flow-card.module').then(m => m.FlowCardModule)},
  {path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
