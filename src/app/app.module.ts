import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormTemplateModule } from './form-template/form-template.module';
import { FormReactiveModule } from './form-reactive/form-reactive.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    FormTemplateModule,
    FormReactiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
