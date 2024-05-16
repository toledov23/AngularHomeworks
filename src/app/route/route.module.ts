import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteRoutingModule } from './route-routing.module';
import { RootLazyComponent } from '../components/root-lazy/root-lazy.component';


@NgModule({
  declarations: [
    RootLazyComponent
  ],
  imports: [
    CommonModule,
    RouteRoutingModule,
  ]
})
export class RouteModule { }
