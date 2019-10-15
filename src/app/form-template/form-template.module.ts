import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormTemplateComponent } from './form-template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormTemplateComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    HttpClientModule
  ],
})
export class FormTemplateModule { }
