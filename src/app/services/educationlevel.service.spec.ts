import { TestBed } from '@angular/core/testing';

import { EducationlevelService } from './educationlevel.service';

describe('EducationlevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EducationlevelService = TestBed.get(EducationlevelService);
    expect(service).toBeTruthy();
  });
});
