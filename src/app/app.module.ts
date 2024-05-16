import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizeDirective } from './directives/capitalize.directive';
import { MyFirstModuleModule } from './my-first-module/my-first-module.module';
import { RootInjectableModule } from './root-injectable/root-injectable.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizeDirective,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MyFirstModuleModule,
    RootInjectableModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
