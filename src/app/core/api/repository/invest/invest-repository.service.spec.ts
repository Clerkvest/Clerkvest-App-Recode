import { TestBed } from '@angular/core/testing';

import { InvestRepositoryService } from './invest-repository.service';

describe('InvestRepositoryService', () => {
  let service: InvestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
