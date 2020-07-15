import {IProject} from './../../models/IProject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigurationService} from '../configuration.service';
import {Injectable} from '@angular/core';
import {IProjectImage} from '../../models/IProjectImage';
import {LoggerService} from 'src/app/core/utils/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  public logger: LoggerService = LoggerService.build(ProjectRepositoryService.name);

  public static readonly SERVICE_BASE: string = '/project/';

  private static readonly GET_ALL_WITH_IMAGE: string = ProjectRepositoryService.SERVICE_BASE + 'all/image';
  private static readonly GET_ALL_SELF: string = ProjectRepositoryService.SERVICE_BASE + 'get/employee';
  private static readonly GET_SINGLE: string = ProjectRepositoryService.SERVICE_BASE + 'get/';
  private static readonly CREATE: string = ProjectRepositoryService.SERVICE_BASE + 'create';
  private static readonly UPDATE: string = ProjectRepositoryService.SERVICE_BASE + 'update';
  private static readonly DELETE_SINGLE: string = ProjectRepositoryService.SERVICE_BASE + 'delete/';

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getAll(): Observable<Array<IProjectImage>> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectRepositoryService.GET_ALL_WITH_IMAGE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<Array<IProjectImage>>(url,
      {
        headers: headers,
      });
  }

  public getAllSelf(): Observable<Array<IProject>> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectRepositoryService.GET_ALL_SELF;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<Array<IProject>>(url,
      {
        headers: headers,
      });
  }

  public getById(id: number): Observable<IProject> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectRepositoryService.GET_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<IProject>(url,
      {
        headers: headers,
      });
  }

  public create(body: IProject): Observable<any> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectRepositoryService.CREATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.post<IProject>(url, body,
    {
        headers: headers,
    });
  }

  public update(body: IProject) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectRepositoryService.UPDATE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.put<IProject>(url, body,
    {
        headers: headers,
    });
  }

  public deleteById(id: number) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ProjectRepositoryService.DELETE_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.delete<IProject>(url,
    {
        headers: headers,
    });
  }

}
