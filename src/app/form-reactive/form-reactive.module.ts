import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { FormReactiveComponent } from './form-reactive.component';

@NgModule({
  declarations: [
    FormReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FormReactiveModule { }
