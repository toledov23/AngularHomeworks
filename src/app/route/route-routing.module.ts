import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootLazyComponent } from '../components/root-lazy/root-lazy.component';

const routes: Routes = [
  { path: 'root1', component: RootLazyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
