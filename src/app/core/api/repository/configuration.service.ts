import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoggerService } from './../../logger/logger.service';
import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private logger: LoggerService = LoggerService.build(ConfigurationService.name);

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
    headers = headers.set('Authorization', 'Bearer '  + this.cookieService.get('_api'));
    // headers = headers.set('Accept', 'application/json');
    // headers = headers.set('Content-Type', 'application/json');

    return headers;
  }
}
