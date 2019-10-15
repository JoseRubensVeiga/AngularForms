import { TestBed } from '@angular/core/testing';

import { ConsultaEstadosService } from './consulta-estados.service';

describe('ConsultaEstadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaEstadosService = TestBed.get(ConsultaEstadosService);
    expect(service).toBeTruthy();
  });
});
