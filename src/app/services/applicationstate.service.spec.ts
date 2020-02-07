import { TestBed } from '@angular/core/testing';

import { ApplicationstateService } from './applicationstate.service';

describe('ApplicationstateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationstateService = TestBed.get(ApplicationstateService);
    expect(service).toBeTruthy();
  });
});
