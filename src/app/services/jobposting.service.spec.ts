import { TestBed } from '@angular/core/testing';

import { JobpostingService } from './jobposting.service';

describe('JobpostingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobpostingService = TestBed.get(JobpostingService);
    expect(service).toBeTruthy();
  });
});
