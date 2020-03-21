import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocalization } from './ilocalization';
import { CookieService } from 'ngx-cookie-service';
import { Language } from './language.enum';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  public logger: LoggerService = LoggerService.build(LocalizationService.name);

  public static readonly LANG_COOKIE = 'language';

  private static readonly JSON_BASE: string = 'assets/localization/localization.';
  
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  getLocalizedStrings(): Observable<ILocalization> {
    
    if (!this.cookieService.check(LocalizationService.LANG_COOKIE)) {
      this.cookieService.set(LocalizationService.LANG_COOKIE, Language.EN);
    }

    let cookieValue = this.cookieService.get(LocalizationService.LANG_COOKIE);
    if (!Object.values(Language).some(val => val === cookieValue)) {
      this.logger.info('Unknown language code reset to default');
      this.cookieService.set(LocalizationService.LANG_COOKIE, Language.EN);
      cookieValue = Language.EN;
    }

    return this.httpClient.get<ILocalization>(LocalizationService.JSON_BASE + cookieValue + '.json');
  }
}
