import { TestBed } from '@angular/core/testing';

import { ProjectCommentControllerService } from './project-comment-controller.service';

describe('ProjectCommentControllerService', () => {
  let service: ProjectCommentControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCommentControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
