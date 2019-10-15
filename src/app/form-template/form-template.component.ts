import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {

  @ViewChild('form', {static: false}) form: NgForm;

  usuario: any = {
    nome: 'José Rubens Veiga Neto',
    email: 'jose@email.com',
    endereco: {
      cep: '06730000',
      numero: '189',
      complemento: 'Casa 5',
      rua: 'Rua 1',
      bairro: 'Centro',
      cidade: 'Vargem Grande',
      estado: 'SP'
    }
  };

  constructor(private consultaCepService: ConsultaCepService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }

  onCepBlur(): void {
    let cep = this.form.form.get("endereco.cep").value
    if(cep) {
      cep = cep.replace(/\D/g, "");
    }

    if(! cep) {
      return;
    }

    this.consultaCepService.consultaCep(cep).subscribe( (res: any) => {
      this.form.form.patchValue({
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
