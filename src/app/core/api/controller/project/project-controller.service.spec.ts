import { TestBed } from '@angular/core/testing';

import { ProjectControllerService } from './project-controller.service';

describe('ProjectControllerService', () => {
  let service: ProjectControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
