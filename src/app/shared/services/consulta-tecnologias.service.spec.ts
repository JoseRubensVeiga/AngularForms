import { TestBed } from '@angular/core/testing';

import { ConsultaTecnologiasService } from './consulta-tecnologias.service';

describe('ConsultaTecnologiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultaTecnologiasService = TestBed.get(ConsultaTecnologiasService);
    expect(service).toBeTruthy();
  });
});
