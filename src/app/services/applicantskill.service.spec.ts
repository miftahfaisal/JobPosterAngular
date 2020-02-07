import { TestBed } from '@angular/core/testing';

import { ApplicantskillService } from './applicantskill.service';

describe('ApplicantskillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantskillService = TestBed.get(ApplicantskillService);
    expect(service).toBeTruthy();
  });
});
