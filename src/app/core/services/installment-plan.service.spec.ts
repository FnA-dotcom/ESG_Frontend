import { TestBed } from '@angular/core/testing';

import { InstallmentPlanService } from './installment-plan.service';

describe('InstallmentPlanService', () => {
  let service: InstallmentPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstallmentPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
