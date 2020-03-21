import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { ConfigurationService } from '../configuration.service';
import { HttpClient } from '@angular/common/http';
import { IInvestIn } from '../../models/models';
import { Observable } from 'rxjs';
import { UserRepositoryService } from '../user/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class InvestRepositoryService {
  
  public logger: LoggerService = LoggerService.build(InvestRepositoryService.name);

  public static readonly SERVICE_BASE: string = '/invest/'

  private static readonly GET_ALL_WITH_IMAGE: string = InvestRepositoryService.SERVICE_BASE + 'all/'
  private static readonly GET_SINGLE: string = InvestRepositoryService.SERVICE_BASE + 'get/';
  private static readonly CREATE: string = InvestRepositoryService.SERVICE_BASE + 'create';
  private static readonly UPDATE: string = InvestRepositoryService.SERVICE_BASE + 'update';
  private static readonly DELETE_SINGLE: string = InvestRepositoryService.SERVICE_BASE + 'delete/';
  private static readonly DELETE_ALL_PROJECT: string = InvestRepositoryService.SERVICE_BASE + 'delete/project/';

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public create(body: IInvestIn): Observable<IInvestIn> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + InvestRepositoryService.CREATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.post<IInvestIn>(url, body,
    {
        headers: headers,
    });
  }

  public deleteAllByProject(projectId: number): Observable<string> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + InvestRepositoryService.DELETE_ALL_PROJECT + encodeURIComponent(String(projectId)) + UserRepositoryService.SERVICE_BASE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<string>(url,
    {
        headers: headers,
    });
  }

  public getAmountByProject(projectId: number): Observable<number> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + InvestRepositoryService.DELETE_ALL_PROJECT + encodeURIComponent(String(projectId)) + UserRepositoryService.SERVICE_BASE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<number>(url,
    {
        headers: headers,
    });
  }
}
