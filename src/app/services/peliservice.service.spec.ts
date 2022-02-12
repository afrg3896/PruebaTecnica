import { TestBed } from '@angular/core/testing';

import { PeliserviceService } from './peliservice.service';

describe('PeliserviceService', () => {
  let service: PeliserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeliserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
