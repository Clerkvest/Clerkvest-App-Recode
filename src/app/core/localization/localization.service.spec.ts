import { TestBed } from '@angular/core/testing';

import { LocalizationService } from './localization.service';
import { Language } from './language.enum';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from '../cookie/cookie.service';

describe('LocalizationService', () => {
  let service: LocalizationService;
  let cookieService: CookieService;
  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule]});

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
    cookieService.set(LocalizationService.LANG_COOKIE, 'unknown');
    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hello');
      done();
    });
  });

  it('should overwrite unknown language', (done) => {

    cookieService.set(LocalizationService.LANG_COOKIE, 'unknown');

    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hello');
      done();
    });
  });

  it('should contain a en-EN object', (done) => {

    cookieService.set(LocalizationService.LANG_COOKIE, Language.EN);

    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hello');
      done();
    });
  });

  it('should contain a de-DE object', (done) => {

    cookieService.set(LocalizationService.LANG_COOKIE, Language.DE);

    service.getLocalizedStrings().subscribe(local => {
      expect(local.hello).toBe('Hallo');
      done();
    });
  });
});
