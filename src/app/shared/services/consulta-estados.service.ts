import { HttpClient } from '@angular/common/http';
import { EstadoBr } from './../models/estado-br';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaEstadosService {

  URL_ENDPOINT = '/assets/json/estados.json';

  constructor(
    private http: HttpClient
  ) { }

  getEstados(): Observable<EstadoBr[]> {
    return this.http.get<EstadoBr[]>(this.URL_ENDPOINT);
  }
}
