import { TestBed } from '@angular/core/testing';

import { JobbenefitService } from './jobbenefit.service';

describe('JobbenefitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobbenefitService = TestBed.get(JobbenefitService);
    expect(service).toBeTruthy();
  });
});
