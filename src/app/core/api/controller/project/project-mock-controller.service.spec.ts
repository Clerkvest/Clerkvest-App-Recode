import { TestBed } from '@angular/core/testing';

import { ProjectMockControllerService } from './project-mock-controller.service';

describe('ProjectMockControllerService', () => {
  let service: ProjectMockControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMockControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
