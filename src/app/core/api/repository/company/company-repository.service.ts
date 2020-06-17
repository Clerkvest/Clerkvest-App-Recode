import { ICompany } from './../../models/ICompany';
import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyRepositoryService {

  public logger: LoggerService = LoggerService.build(CompanyRepositoryService.name);

  public static readonly SERVICE_BASE: string = '/company/'

  private static readonly GET_SINGLE: string = CompanyRepositoryService.SERVICE_BASE + 'get/';
  private static readonly UPDATE: string = CompanyRepositoryService.SERVICE_BASE + 'update';

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getById(id: number): Observable<ICompany> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + CompanyRepositoryService.GET_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<ICompany>(url,
    {
        headers: headers,
    });
  }

  public update(body: ICompany) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + CompanyRepositoryService.UPDATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.put<ICompany>(url, body,
    {
        headers: headers,
    });
  }
}
