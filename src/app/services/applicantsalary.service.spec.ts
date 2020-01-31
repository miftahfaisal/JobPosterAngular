import { TestBed } from '@angular/core/testing';

import { ApplicantsalaryService } from './applicantsalary.service';

describe('ApplicantsalaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantsalaryService = TestBed.get(ApplicantsalaryService);
    expect(service).toBeTruthy();
  });
});
