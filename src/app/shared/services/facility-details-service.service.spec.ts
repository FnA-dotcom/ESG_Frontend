import { TestBed } from '@angular/core/testing';

import { FacilityDetailsServiceService } from './facility-details-service.service';

describe('FacilityDetailsServiceService', () => {
  let service: FacilityDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
