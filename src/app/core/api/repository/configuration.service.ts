import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';
import { LoggerService } from '../../utils/logger/logger.service';
import { CookieService } from '../../utils/cookie/cookie.service';
import { Cookies } from '../../utils/cookie/cookie';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public logger: LoggerService = LoggerService.build(ConfigurationService.name);

  public defaultHeaders = new HttpHeaders();

  constructor(private cookieService: CookieService) { }

  public getBasePath(): string {
    if(isNullOrUndefined(environment.basePath)) {
      return 'localhost:8080';
    } else {
      return environment.basePath;
    }
  }

  private getKey(): string {
    return '';
  }

  getHeaders() {
    let headers = this.defaultHeaders;
    headers = headers.set('Authorization', 'Bearer '  + this.cookieService.get(Cookies.API_KEY));
    // headers = headers.set('Accept', 'application/json');
    // headers = headers.set('Content-Type', 'application/json');

    return headers;
  }
}
