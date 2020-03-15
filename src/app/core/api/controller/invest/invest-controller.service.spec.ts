import { TestBed } from '@angular/core/testing';

import { InvestControllerService } from './invest-controller.service';

describe('InvestControllerService', () => {
  let service: InvestControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
