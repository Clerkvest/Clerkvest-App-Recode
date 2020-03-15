import { TestBed } from '@angular/core/testing';

import { ProjectCommentRepositoryService } from './project-comment-repository.service';

describe('ProjectCommentRepositoryService', () => {
  let service: ProjectCommentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCommentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
