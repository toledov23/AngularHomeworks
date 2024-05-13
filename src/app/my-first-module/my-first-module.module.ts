import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { ServiceTestService } from '../services/service-test.service';
import { ServiceModuleTestService } from '../services/service-module-test.service';
import { TestServiceComponentComponent } from '../components/test-service-component/test-service-component.component';

const routes: Routes = [
  {
    path: '',
    component: MyFirstComponentComponent
  }
];

@NgModule({
  declarations: [
    MyFirstComponentComponent,
    TestServiceComponentComponent
  ],
  exports: [
    MyFirstComponentComponent,
    TestServiceComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ServiceTestService,
    ServiceModuleTestService
  ]
})
export class MyFirstModuleModule { }
