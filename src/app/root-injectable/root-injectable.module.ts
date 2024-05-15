import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableComponentComponent } from '../components/injectable-component/injectable-component.component';



@NgModule({
  declarations: [
    InjectableComponentComponent
  ],
  exports: [
    InjectableComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RootInjectableModule { }
