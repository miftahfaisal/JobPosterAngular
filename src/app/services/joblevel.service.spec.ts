import { TestBed } from '@angular/core/testing';

import { JoblevelService } from './joblevel.service';

describe('JoblevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JoblevelService = TestBed.get(JoblevelService);
    expect(service).toBeTruthy();
  });
});
