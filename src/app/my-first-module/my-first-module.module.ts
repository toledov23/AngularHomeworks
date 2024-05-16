import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';
import { ServiceTestService } from '../services/service-test.service';
import { ServiceModuleTestService } from '../services/service-module-test.service';
import { TestServiceComponentComponent } from '../components/test-service-component/test-service-component.component';
import { PipesComponentComponent } from '../components/pipes-component/pipes-component.component';
import { UpperCasePipe } from '../pipes/upper-case.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: MyFirstComponentComponent
  }
];

@NgModule({
  declarations: [
    MyFirstComponentComponent,
    TestServiceComponentComponent,
    PipesComponentComponent,
    UpperCasePipe
  ],
  exports: [
    MyFirstComponentComponent,
    TestServiceComponentComponent,
    PipesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatDialogModule,
    FormsModule
    ],
  providers: [
    ServiceTestService,
    ServiceModuleTestService
  ]
})
export class MyFirstModuleModule { }
