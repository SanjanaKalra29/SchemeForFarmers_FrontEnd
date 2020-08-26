import { TestBed } from '@angular/core/testing';

import { AddCropService } from './add-crop.service';

describe('AddCropService', () => {
  let service: AddCropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
