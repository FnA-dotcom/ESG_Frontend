import { TestBed } from '@angular/core/testing';

import { TransRptDateRangService } from './trans-rpt-date-rang.service';

describe('TransRptDateRangService', () => {
  let service: TransRptDateRangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransRptDateRangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
