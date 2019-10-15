import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { ConsultaEstadosService } from './../shared/services/consulta-estados.service';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Observable } from 'rxjs';
import { EstadoBr } from '../shared/models/estado-br';

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

  estadosBr: Observable<EstadoBr[]>;

  constructor(
    private consultaCepService: ConsultaCepService,
    private consultaEstadosService: ConsultaEstadosService
  ) { }

  ngOnInit() {
    this.estadosBr = this.consultaEstadosService.getEstados();
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onCepBlur() {
    let cep = this.formGroup.get('endereco').get('cep').value;

    cep = cep.replace(/[^0-9]/g, '');

    if(cep == null || cep === '' || cep.length !== 8 ) {
      return;
    }

    this.consultaCepService.consultaCep(cep).subscribe( (res: any) => {
      this.formGroup.patchValue({
        endereco: {
          rua: res.logradouro,
          bairro: res.bairro,
          cidade: res.localidade,
          estado: res.uf
        }
      });
    });
  }

}
