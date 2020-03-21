import { environment } from './../../../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ImageRepositoryService } from './image-repository.service';
import { CookieService } from 'ngx-cookie-service';

describe('ImageRepositoryService', () => {
  let service: ImageRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});
    
    environment.logLevel = 'debug',
    environment.logTimestamp = true,
    environment.logType = true,
    environment.logIdentifier = true,
    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    const cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(ImageRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });
  
  it('should return a String object', (done) => {
    let image$ = service.getById(0);

    image$.subscribe(
      image => {
        expect(image).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should create a Image for a Company', (done) => {
    let image$ = service.createForCompany(new Blob(), 0);

    image$.subscribe(
      image => {
        expect(image).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should create a Image for a Project', (done) => {
    let image$ = service.createForCompany(new Blob(), 0);

    image$.subscribe(
      image => {
        expect(image).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });
});
