import { TestBed } from '@angular/core/testing';

import { DataCharacterService } from './data-character.service';

describe('DataCharacterService', () => {
  let service: DataCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
