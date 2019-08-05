import { TestBed } from '@angular/core/testing';

import { TileSelectService } from './tile-select.service';

describe('TileSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TileSelectService = TestBed.get(TileSelectService);
    expect(service).toBeTruthy();
  });
});
