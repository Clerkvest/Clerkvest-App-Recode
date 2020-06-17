import { IProject } from './../../models/IProject';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TestBed, tick } from '@angular/core/testing';

import { IProjectImage } from '../../models/models';
import { Observable } from 'rxjs';
import { ProjectRepositoryService } from './project-repository.service';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';

describe('ProjectRepositoryService', () => {
  let service: ProjectRepositoryService;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule],
        providers: [CookieService]
      }
    );

    environment.logLevel = 'debug',
    environment.logTimestamp = true,
    environment.logType = true,
    environment.logIdentifier = true,
    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(ProjectRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should return at least one IProject object', (done) => {
    let projects = service.getAll();

    let _project: IProjectImage;

    projects.subscribe(
      projects => {
        expect(projects.length).toBeGreaterThan(0);

        projects.forEach(project => {

          _project = project;

          expect(project.id).toBe(0);
          expect(project.employeeId).toBeDefined();
          expect(project.companyId).toBeDefined();
          expect(project.link).toBeDefined();
          expect(project.description).toBeDefined();
          expect(project.goal).toBeDefined();
          expect(project.investedIn).toBeDefined();
          expect(project.reached).toBeDefined();
          expect(project.image).toBeDefined();
          expect(project.createdAt).toBeDefined();
          expect(project.fundedAt).toBeDefined();

          done();
        });
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return a IProject object', (done) => {
    let project$ = service.getById(0);

    project$.subscribe(
      p => {

        expect(p).toBeDefined();

        expect(p.id).toBe(0);
        expect(p.employeeId).toBeDefined();
        expect(p.companyId).toBeDefined();
        expect(p.link).toBeDefined();
        expect(p.description).toBeDefined();
        expect(p.goal).toBeDefined();
        expect(p.investedIn).toBeDefined();
        expect(p.reached).toBeDefined();
        expect(p.image).toBeDefined();
        expect(p.createdAt).toBeDefined();
        expect(p.fundedAt).toBeDefined();

        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should create a IProject object', (done) => {

    let project: IProject = new class implements IProject {
      id?: number;
      employeeId?: number;
      companyId?: number;
      link?: string;
      title?: string;
      description?: string;
      goal?: number;
      investedIn?: number;
      reached?: boolean;
      image?: number;
      createdAt?: Date;
      fundedAt?: Date;
    }

    let project$ = service.create(project);

    project$.subscribe(
      p => {

        expect(p).toBeDefined();

        expect(p.id).toBe(0);
        expect(p.employeeId).toBeDefined();
        expect(p.companyId).toBeDefined();
        expect(p.link).toBeDefined();
        expect(p.description).toBeDefined();
        expect(p.goal).toBeDefined();
        expect(p.investedIn).toBeDefined();
        expect(p.reached).toBeDefined();
        expect(p.image).toBeDefined();
        expect(p.createdAt).toBeDefined();
        expect(p.fundedAt).toBeDefined();

        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should update a IProject object', (done) => {

    let project: IProject = new class implements IProject {
      id?: number;
      employeeId?: number;
      companyId?: number;
      link?: string;
      title?: string;
      description?: string;
      goal?: number;
      investedIn?: number;
      reached?: boolean;
      image?: number;
      createdAt?: Date;
      fundedAt?: Date;
    }

    let project$ = service.update(project);

    project$.subscribe(
      p => {

        expect(p).toBeDefined();

        expect(p.id).toBe(0);
        expect(p.employeeId).toBeDefined();
        expect(p.companyId).toBeDefined();
        expect(p.link).toBeDefined();
        expect(p.description).toBeDefined();
        expect(p.goal).toBeDefined();
        expect(p.investedIn).toBeDefined();
        expect(p.reached).toBeDefined();
        expect(p.image).toBeDefined();
        expect(p.createdAt).toBeDefined();
        expect(p.fundedAt).toBeDefined();

        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should delete a IProject', (done) => {

    let project$ = service.deleteById(0);

    project$.subscribe(
      p => {
        expect(p).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });
});
