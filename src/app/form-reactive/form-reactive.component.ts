import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ConsultaEstadosService } from './../shared/services/consulta-estados.service';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { ConsultaTecnologiasService } from './../shared/services/consulta-tecnologias.service';
import { ConsultaCargosService } from './../shared/services/consulta-cargos.service';

import { EstadoBr } from '../shared/models/estado-br';
import { Cargo } from '../shared/models/cargo';
import { Tecnologia } from '../shared/models/tecnologia';

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
    }),
    cargo: new FormControl(null),
    tecnologias: new FormControl(null),
    newsletter: new FormControl('s'),
    termos: new FormControl(null, Validators.pattern('true'))
  });

  estadosBr: Observable<EstadoBr[]>;
  cargos: Observable<Cargo[]>;
  tecnologias: Observable<Tecnologia[]>;

  constructor(
    private consultaCepService: ConsultaCepService,
    private consultaEstadosService: ConsultaEstadosService,
    private consultaCargosService: ConsultaCargosService,
    private consultaTecnologiasService: ConsultaTecnologiasService
  ) { }

  ngOnInit() {
    this.estadosBr = this.consultaEstadosService.getEstados();
    this.cargos = this.consultaCargosService.getCargos();
    this.tecnologias = this.consultaTecnologiasService.getTecnologias();
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

  setarCargo() {
    const cargo = {nome: "Desenvolvedor", nivel: 'Pleno', descricao: 'Desenvolvedor Pleno PHP'};
    this.formGroup.patchValue({
      cargo: cargo
    });
  }

  compararCargos(cargo1: Cargo, cargo2: Cargo) {
    if(!cargo1 || !cargo2) {
      return false;
    }
    if(
      cargo1.nome === cargo2.nome &&
      cargo1.nivel === cargo1.nivel &&
      cargo1.descricao === cargo1.descricao
    ) {
      return true;
    }
    return false;
  }

}
