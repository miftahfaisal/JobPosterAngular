import { TestBed } from '@angular/core/testing';

import { SkilllevelService } from './skilllevel.service';

describe('SkilllevelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkilllevelService = TestBed.get(SkilllevelService);
    expect(service).toBeTruthy();
  });
});
