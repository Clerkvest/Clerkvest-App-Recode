import { IProjectComment } from './../../../models/IProjectComment';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProjectCommentRepositoryService } from './project-comment-repository.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';

describe('ProjectCommentRepositoryService', () => {
  let service: ProjectCommentRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});

    environment.logLevel = 'debug',
    environment.logTimestamp = true,
    environment.logType = true,
    environment.logIdentifier = true,
    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    const cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(ProjectCommentRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should return at least one IProjectComment object', (done) => {
    let projects = service.getAllByProjectId(0);

    let _project: IProjectComment;

    projects.subscribe(
      projects => {
        expect(projects.length).toBeGreaterThan(0);

        projects.forEach(project => {

          _project = project;

          expect(project.id).toBe(0);
          expect(project.employeeId).toBeDefined();
          expect(project.date).toBeDefined();
          expect(project.title).toBeDefined();
          expect(project.text).toBeDefined();

          done();
        });
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return create a IProjectComment object', (done) => {

    let project: IProjectComment = new class implements IProjectComment {
      id?: number;
      employeeId?: number;
      projectId?: number;
      title?: string;
      text?: string;
      date?: Date;
    }

    let project$ = service.create(project);

    project$.subscribe(
      project => {
        expect(project).toBeDefined();

        expect(project.id).toBe(0);
        expect(project.employeeId).toBeDefined();
        expect(project.date).toBeDefined();
        expect(project.title).toBeDefined();
        expect(project.text).toBeDefined();

        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should return delete a IProjectComment object', (done) => {
    let project$ = service.deleteById(0)

    let _project: IProjectComment;

    project$.subscribe(
      project => {
        expect(project).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });
});
