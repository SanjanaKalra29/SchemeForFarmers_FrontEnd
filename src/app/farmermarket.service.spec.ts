import { TestBed } from '@angular/core/testing';

import { FarmermarketService } from './farmermarket.service';

describe('FarmermarketService', () => {
  let service: FarmermarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmermarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
