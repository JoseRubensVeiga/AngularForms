import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  formGroup = new FormGroup({
    nome: new FormControl(null),
    email: new FormControl(null),
    endereco: new FormGroup({
      cep: new FormControl(null),
      complemento: new FormControl(null),
      numero: new FormControl(null),
      rua: new FormControl(null),
      bairro: new FormControl(null),
      cidade: new FormControl(null),
      estado: new FormControl(null)
    })
  });

  constructor() {
    


  }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.formGroup);
  }

}
