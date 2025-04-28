import { TestBed } from '@angular/core/testing';

import { GetRecipService } from './get-recip.service';

describe('GetRecipService', () => {
  let service: GetRecipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
