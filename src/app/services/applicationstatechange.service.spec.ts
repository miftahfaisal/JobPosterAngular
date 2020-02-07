import { TestBed } from '@angular/core/testing';

import { ApplicationstatechangeService } from './applicationstatechange.service';

describe('ApplicationstatechangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationstatechangeService = TestBed.get(ApplicationstatechangeService);
    expect(service).toBeTruthy();
  });
});
