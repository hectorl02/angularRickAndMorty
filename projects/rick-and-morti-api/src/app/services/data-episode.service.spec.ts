import { TestBed } from '@angular/core/testing';

import { DataEpisodeService } from './data-episode.service';

describe('DataEpisodeService', () => {
  let service: DataEpisodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEpisodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
