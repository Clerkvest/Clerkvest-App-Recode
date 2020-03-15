import { TestBed } from '@angular/core/testing';

import { ProjectEndpointService } from './project-endpoint.service';

describe('ProjectEndpointService', () => {
  let service: ProjectEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
