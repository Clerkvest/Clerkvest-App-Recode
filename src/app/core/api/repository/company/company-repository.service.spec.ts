import { ICompany } from './../../models/ICompany';
import { TestBed } from '@angular/core/testing';

import { CompanyRepositoryService } from './company-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';

describe('CompanyRepositoryService', () => {
  let service: CompanyRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});

    environment.logLevel = 'debug',
    environment.logTimestamp = true,
    environment.logType = true,
    environment.logIdentifier = true,
    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    const cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(CompanyRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should return a ICompany object', (done) => {
    let company$ = service.getById(0);

    company$.subscribe(
      company => {
        expect(company).toBeDefined();
        expect(company.id).toBeDefined();
        expect(company.name).toBeDefined();
        expect(company.domain).toBeDefined();
        expect(company.image).toBeDefined();
        expect(company.payAmount).toBeDefined();
        expect(company.payInterval).toBeDefined();
        expect(company.inviteOnly).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should update and return a ICompany object', (done) => {

    let _company: ICompany = new class implements ICompany {
      id?: number;
      name?: string;
      domain?: string;
      image?: number;
      payAmount?: number;
      payInterval?: number;
      inviteOnly?: boolean;
    }

    let company$ = service.update(_company);

    company$.subscribe(
      company => {
        expect(company).toBeDefined();
        expect(company.id).toBeDefined();
        expect(company.name).toBeDefined();
        expect(company.domain).toBeDefined();
        expect(company.image).toBeDefined();
        expect(company.payAmount).toBeDefined();
        expect(company.payInterval).toBeDefined();
        expect(company.inviteOnly).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });
});
