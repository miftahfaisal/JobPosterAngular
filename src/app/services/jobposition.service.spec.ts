import { TestBed } from '@angular/core/testing';

import { JobpositionService } from './jobposition.service';

describe('JobpositionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobpositionService = TestBed.get(JobpositionService);
    expect(service).toBeTruthy();
  });
});
