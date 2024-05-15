import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { RootInjectableModule } from './root-injectable/root-injectable.module';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModuleModule,
    RootInjectableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
