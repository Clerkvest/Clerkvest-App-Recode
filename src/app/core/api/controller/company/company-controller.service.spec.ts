import { TestBed } from '@angular/core/testing';

import { CompanyControllerService } from './company-controller.service';

describe('CompanyControllerService', () => {
  let service: CompanyControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
