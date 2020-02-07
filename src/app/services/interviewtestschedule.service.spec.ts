import { TestBed } from '@angular/core/testing';

import { InterviewtestscheduleService } from './interviewtestschedule.service';

describe('InterviewtestscheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterviewtestscheduleService = TestBed.get(InterviewtestscheduleService);
    expect(service).toBeTruthy();
  });
});
