import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsultaCepService {

  URL_ENDPOINT = '//viacep.com.br/ws/';
  RETURN_TYPE = 'json'
  constructor(
    private http: HttpClient
  ) { }

  consultaCep(cep: string|number): Observable<object> {
    return this.http.get(`${this.URL_ENDPOINT}${cep}/${this.RETURN_TYPE}/`);
  }
}
