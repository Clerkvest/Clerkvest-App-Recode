import { TestBed } from '@angular/core/testing';

import { LocalizationService } from './localization.service';
import { Language } from './language.enum';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from '../cookie/cookie.service';
import { Cookies } from '../cookie/cookie';

describe('LocalizationService', () => {
  let service: LocalizationService;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule],
        providers: [LocalizationService]
      }
    );

    cookieService = TestBed.inject(CookieService);
    service = TestBed.inject(LocalizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should set default language', (done) => {
    cookieService.set(Cookies.LANGUAGE, 'unknown');
    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hello');
      done();
    });
  });

  it('should overwrite unknown language', (done) => {

    cookieService.set(Cookies.LANGUAGE, 'unknown');

    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hello');
      done();
    });
  });

  it('should contain a en-EN object', (done) => {

    cookieService.set(Cookies.LANGUAGE, Language.EN);

    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hello');
      done();
    });
  });

  it('should contain a de-DE object', (done) => {

    cookieService.set(Cookies.LANGUAGE, Language.DE);

    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hallo');
      done();
    });
  });
});
