import { IResponse } from './../../models/IResponse';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../../models/models';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class TokenRepositoryService {

  public logger: LoggerService = LoggerService.build(TokenRepositoryService.name);

  public static readonly SERVICE_BASE: string = '/token/'

  private static readonly GET_KEY: string = '/token/'
  private static readonly INVITE: string = '/invite';

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
