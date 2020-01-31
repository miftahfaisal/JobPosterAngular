import { TestBed } from '@angular/core/testing';

import { ApplicanteducationService } from './applicanteducation.service';

describe('ApplicanteducationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicanteducationService = TestBed.get(ApplicanteducationService);
    expect(service).toBeTruthy();
  });
});
