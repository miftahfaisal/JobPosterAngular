import { TestBed } from '@angular/core/testing';

import { ApplicantprojectService } from './applicantproject.service';

describe('ApplicantprojectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicantprojectService = TestBed.get(ApplicantprojectService);
    expect(service).toBeTruthy();
  });
});
