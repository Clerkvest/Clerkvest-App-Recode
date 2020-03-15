import { TestBed } from '@angular/core/testing';

import { TokenControllerService } from './token-controller.service';

describe('TokenControllerService', () => {
  let service: TokenControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
