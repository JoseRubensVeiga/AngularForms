import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tecnologia } from '../models/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class ConsultaTecnologiasService {

  constructor() { }

  getTecnologias(): Observable<Tecnologia[]> {
    return of([
      {nome: 'Java'},
      {nome: 'JavaScript'},
      {nome: 'PHP'},
      {nome: 'Ruby'},
      {nome: 'Python'}
    ]);
  }
}
