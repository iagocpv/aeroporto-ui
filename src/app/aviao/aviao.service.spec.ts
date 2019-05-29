import { TestBed } from '@angular/core/testing';

import { AviaoService } from './aviao.service';

describe('AviaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AviaoService = TestBed.get(AviaoService);
    expect(service).toBeTruthy();
  });
});
