import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCargosService {

  constructor() { }

  getCargos(): Observable<Cargo[]> {
    return of([
      {nome: 'Desenvolvedor', nivel: 'Júnior', descricao: 'Desenvolvedor Júnior PHP'},
      {nome: 'Desenvolvedor', nivel: 'Pleno', descricao: 'Desenvolvedor Pleno JavaScript'},
      {nome: 'Desenvolvedor', nivel: 'Sênior', descricao: 'Desenvolvedor Sênior .NET'},
    ]);
  }

}
