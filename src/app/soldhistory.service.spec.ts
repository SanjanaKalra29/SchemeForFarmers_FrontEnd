import { TestBed } from '@angular/core/testing';

import { SoldhistoryService } from './soldhistory.service';

describe('SoldhistoryService', () => {
  let service: SoldhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoldhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
