import { IProjectComment } from './../../../models/IProjectComment';
import { Injectable } from '@angular/core';
import { ConfigurationService } from '../../configuration.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectCommentRepositoryService {

  public logger: LoggerService = LoggerService.build(ProjectCommentRepositoryService.name);

  public static readonly SERVICE_BASE: string = '/comment/'

  private static readonly GET_ALL_OF_PROJECT: string = '/comments';
  private static readonly GET_SINGLE: string = ProjectCommentRepositoryService.SERVICE_BASE + 'get/';
  private static readonly CREATE: string = ProjectCommentRepositoryService.SERVICE_BASE + 'create';
  private static readonly UPDATE: string = ProjectCommentRepositoryService.SERVICE_BASE + 'update';
  private static readonly DELETE_SINGLE: string = ProjectCommentRepositoryService.SERVICE_BASE + 'delete/';

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getAllByProjectId(id: number): Observable<Array<IProjectComment>> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectCommentRepositoryService.SERVICE_BASE + encodeURIComponent(String(id)) + ProjectCommentRepositoryService.GET_ALL_OF_PROJECT;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<Array<IProjectComment>>(url,
    {
        headers: headers,
    });
  }

  public create(body: IProjectComment): Observable<any> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectCommentRepositoryService.CREATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.post<IProjectComment>(url, body,
    {
        headers: headers,
    });
  }

  public deleteById(id: number) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectCommentRepositoryService.DELETE_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.delete<IProjectComment>(url,
    {
        headers: headers,
    });
  }
}
