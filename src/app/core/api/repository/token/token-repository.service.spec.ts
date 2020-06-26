import { IResponse } from './../../models/IResponse';
import { environment } from './../../../../../environments/environment';
import { TestBed } from '@angular/core/testing';

import { TokenRepositoryService } from './token-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';

/*
describe('TokenRepositoryService', () => {
  let service: TokenRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});

    environment.logLevel = 'debug',
    environment.logTimestamp = true,
    environment.logType = true,
    environment.logIdentifier = true,
    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    const cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(TokenRepositoryService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should return an IResponse object', (done) => {
    let response$ = service.getApiKey('1234');

    response$.subscribe(
      r => {
        expect(r.response).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });
});
*/
