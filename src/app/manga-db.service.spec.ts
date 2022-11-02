import { TestBed } from '@angular/core/testing';

import { MangaDBService } from './manga-db.service';

describe('MangaDBService', () => {
  let service: MangaDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
