import { IResponse } from './../../models/IResponse';
import { IEmployee } from './../../models/IEmployee';
import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { ConfigurationService } from '../configuration.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectRepositoryService } from '../project/project-repository.service';
import { IProjectImage, IProject } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  public static readonly SERVICE_BASE: string = '/employee/'

  private static readonly GET_ALL: string = UserRepositoryService.SERVICE_BASE + 'all/'
  private static readonly GET_SINGLE: string = UserRepositoryService.SERVICE_BASE + 'get/';
  private static readonly CREATE: string = UserRepositoryService.SERVICE_BASE + 'create';
  private static readonly UPDATE: string = UserRepositoryService.SERVICE_BASE + 'update';
  private static readonly DELETE_SINGLE: string = UserRepositoryService.SERVICE_BASE + 'delete/';
  private static readonly INVITE: string = '/invite'

  private logger: LoggerService = LoggerService.build(UserRepositoryService.name);

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getAll(): Observable<Array<IEmployee>> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.GET_ALL;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<Array<IEmployee>>(url,
    {
        headers: headers,
    });
  }

  public getById(id: number): Observable<IEmployee> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.GET_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<IEmployee>(url,
    {
        headers: headers,
    });
  }

  public getMyself(): Observable<IEmployee> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.GET_SINGLE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<IEmployee>(url,
    {
        headers: headers,
    });
  }

  public create(body: IEmployee): Observable<any> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.CREATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.post<IEmployee>(url, body,
    {
        headers: headers,
    });
  }

  public update(body: IEmployee) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.UPDATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.put<IEmployee>(url, body,
    {
        headers: headers,
    });
  }

  public deleteById(id: number) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.DELETE_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.delete<IEmployee>(url,
    {
        headers: headers,
    });
  }

  public invite(email: string): Observable<IResponse> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserRepositoryService.INVITE + '?mail=' + encodeURIComponent(email);
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.post<IResponse>(url,
      {
          headers: headers,
      });
  }
}
