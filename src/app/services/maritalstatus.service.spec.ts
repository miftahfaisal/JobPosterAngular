import { TestBed } from '@angular/core/testing';

import { MaritalstatusService } from './maritalstatus.service';

describe('MaritalstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaritalstatusService = TestBed.get(MaritalstatusService);
    expect(service).toBeTruthy();
  });
});
