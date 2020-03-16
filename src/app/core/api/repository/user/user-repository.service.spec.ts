import { IEmployee } from './../../models/IEmployee';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserRepositoryService } from './user-repository.service';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

describe('UserRepositoryService', () => {
  let service: UserRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});

    environment.basePath = 'https://virtserver.swaggerhub.com/c669/ClerkvestPublic/1.0.0/api';

    const cookieService = TestBed.inject(CookieService);
    cookieService.set('_api', 'swagger-token')

    service = TestBed.inject(UserRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return at least one IEmployee object', (done) => {
    let employees$ = service.getAll();

    let _employee: IEmployee;

    employees$.subscribe(
      employees => {
        expect(employees.length).toBeGreaterThan(0);

        employees.forEach(employee => {

          _employee = employee;

          expect(employee.id).toBe(0);
          expect(employee.companyId).toBeDefined();
          expect(employee.email).toBeDefined();
          expect(employee.balance).toBeDefined();
          expect(employee.token).toBeDefined();
          expect(employee.firstname).toBeDefined();
          expect(employee.lastname).toBeDefined();
          expect(employee.nickname).toBeDefined();
          expect(employee.admin).toBeDefined();

          done();
        });
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return a IEmployee object', (done) => {
    let employee$ = service.getById(0);

    let _employee: IEmployee;

    employee$.subscribe(
      employee => {

        _employee = employee;

        expect(employee.id).toBe(0);
        expect(employee.companyId).toBeDefined();
        expect(employee.email).toBeDefined();
        expect(employee.balance).toBeDefined();
        expect(employee.token).toBeDefined();
        expect(employee.firstname).toBeDefined();
        expect(employee.lastname).toBeDefined();
        expect(employee.nickname).toBeDefined();
        expect(employee.admin).toBeDefined();

        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return a IEmployee object using a token', (done) => {
    let employee$ = service.getMyself();

    let _employee: IEmployee;

    employee$.subscribe(
      employee => {

        _employee = employee;

        expect(employee.id).toBe(0);
        expect(employee.companyId).toBeDefined();
        expect(employee.email).toBeDefined();
        expect(employee.balance).toBeDefined();
        expect(employee.token).toBeDefined();
        expect(employee.firstname).toBeDefined();
        expect(employee.lastname).toBeDefined();
        expect(employee.nickname).toBeDefined();
        expect(employee.admin).toBeDefined();
        
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return create a IEmployee object', (done) => {

    let _employee: IEmployee = new class implements IEmployee {
      id?: number;
      companyId?: number;
      email?: string;
      balance?: number;
      token?: string;
      firstname?: string;
      lastname?: string;
      nickname?: string;
      admin?: boolean;
    }

    let employee$ = service.create(_employee);

    employee$.subscribe(
      employee => {

        _employee = employee;

        expect(employee.id).toBe(0);
        expect(employee.companyId).toBeDefined();
        expect(employee.email).toBeDefined();
        expect(employee.balance).toBeDefined();
        expect(employee.token).toBeDefined();
        expect(employee.firstname).toBeDefined();
        expect(employee.lastname).toBeDefined();
        expect(employee.nickname).toBeDefined();
        expect(employee.admin).toBeDefined();
        
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return update a IEmployee object', (done) => {

    let _employee: IEmployee = new class implements IEmployee {
      id?: number;
      companyId?: number;
      email?: string;
      balance?: number;
      token?: string;
      firstname?: string;
      lastname?: string;
      nickname?: string;
      admin?: boolean;
    }

    let employee$ = service.update(_employee);

    employee$.subscribe(
      employee => {

        _employee = employee;

        expect(employee.id).toBe(0);
        expect(employee.companyId).toBeDefined();
        expect(employee.email).toBeDefined();
        expect(employee.balance).toBeDefined();
        expect(employee.token).toBeDefined();
        expect(employee.firstname).toBeDefined();
        expect(employee.lastname).toBeDefined();
        expect(employee.nickname).toBeDefined();
        expect(employee.admin).toBeDefined();
        
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });

  it('should return create a IEmployee object', (done) => {
    let employee$ = service.deleteById(0);

    employee$.subscribe(
      employee => {
        expect(employee).toBeDefined();
        done();
      },
      error => {
        expect(error).not.toBeDefined();
        done();
      }
    );
  });
});
