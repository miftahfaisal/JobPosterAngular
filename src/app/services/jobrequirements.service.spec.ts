import { TestBed } from '@angular/core/testing';

import { JobrequirementsService } from './jobrequirements.service';

describe('JobrequirementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobrequirementsService = TestBed.get(JobrequirementsService);
    expect(service).toBeTruthy();
  });
});
