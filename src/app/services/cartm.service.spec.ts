import { TestBed } from '@angular/core/testing';

import { CartmService } from './cartm.service';

describe('CartmService', () => {
  let service: CartmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
