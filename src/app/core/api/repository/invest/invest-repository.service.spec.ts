import { IInvestIn } from './../../models/IInvestIn';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InvestRepositoryService } from './invest-repository.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';

/*
describe('InvestRepositoryService', () => {
  let service: InvestRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});

    environment.logLevel = 'debug',
    environment.logTimestamp = true,
    environment.logType = true,
    environment.logIdentifier = true,
    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    const cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(InvestRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should create a IInvestIn object', (done) => {
    let investment: IInvestIn = new class implements IInvestIn {
      id?: number;
      projectId?: number;
      employeeId?: number;
      investment?: number;
    }

    let invest$ = service.create(investment);

    invest$.subscribe(
      invest => {
        expect(invest).toBeDefined();

        expect(invest.id).toBe(0);
        expect(invest.employeeId).toBeDefined();
        expect(invest.projectId).toBeDefined();
        expect(invest.investment).toBeDefined();

        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should delete all IInvestIn objects', (done) => {

    let invest$ = service.deleteAllByProject(0);

    invest$.subscribe(
      invest => {
        expect(invest).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });

  it('should return a Invest amount', (done) => {

    let invest$ = service.getAmountByProject(0);

    invest$.subscribe(
      invest => {
        expect(invest).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    )
  });
});
*/
