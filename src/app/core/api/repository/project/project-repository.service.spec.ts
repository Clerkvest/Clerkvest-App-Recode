import { CookieService } from 'ngx-cookie-service';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { TestBed, tick } from '@angular/core/testing';

import { ProjectEndpointService } from './project-repository.service';
import { IProjectImage } from '../../models/models';
import { Observable } from 'rxjs';

describe('ProjectEndpointService', () => {
  let service: ProjectEndpointService;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule],
        providers: [CookieService]
      }
    );

    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(ProjectEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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
          expect(project.description).toBe('string');
        });
      },
      error => {
        console.log(error);
      },
      () => {
        done();
      }
    );
  });
});
