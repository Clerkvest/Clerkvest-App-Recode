import { IResponse } from './../../models/IResponse';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { ConfigurationService } from '../configuration.service';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class TokenRepositoryService {

  public static readonly SERVICE_BASE: string = '/token/'

  private static readonly GET_KEY: string = '/token/'
  private static readonly INVITE: string = '/invite';

  private logger: LoggerService = LoggerService.build(TokenRepositoryService.name);

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getApiKey(token: string): Observable<IResponse> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + TokenRepositoryService.GET_KEY + encodeURIComponent(token);
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<IResponse>(url,
    {
        headers: headers,
    });
  }
}
