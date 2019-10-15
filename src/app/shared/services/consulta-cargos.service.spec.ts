import { TestBed } from '@angular/core/testing';

import { ConsultaCargosService } from './consulta-cargos.service';

describe('ConsultaCargosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaCargosService = TestBed.get(ConsultaCargosService);
    expect(service).toBeTruthy();
  });
});
