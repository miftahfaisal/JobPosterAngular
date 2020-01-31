import { TestBed } from '@angular/core/testing';

import { JobcategoryService } from './jobcategory.service';

describe('JobcategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobcategoryService = TestBed.get(JobcategoryService);
    expect(service).toBeTruthy();
  });
});
