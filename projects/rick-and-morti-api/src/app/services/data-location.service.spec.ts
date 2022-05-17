import { TestBed } from '@angular/core/testing';

import { DataLocationService } from './data-location.service';

describe('DataLocationService', () => {
  let service: DataLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
