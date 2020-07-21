import {Injectable} from '@angular/core';
import {IEmployeeSettings} from './../../../models/IEmployeeSettings';
import {LoggerService} from '../../../../utils/logger/logger.service';
import {ConfigurationService} from '../../configuration.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsRepositoryService {

  public static readonly SERVICE_BASE: string = '/settings/';
  private static readonly GET_SINGLE: string = UserSettingsRepositoryService.SERVICE_BASE + 'get/';
  private static readonly UPDATE: string = UserSettingsRepositoryService.SERVICE_BASE + 'update';
  public logger: LoggerService = LoggerService.build(UserSettingsRepositoryService.name);
  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getById(id: number): Observable<IEmployeeSettings> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserSettingsRepositoryService.GET_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<IEmployeeSettings>(url,
      {
        headers: headers,
      });
  }


  public getForSelf(): Observable<IEmployeeSettings> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserSettingsRepositoryService.GET_SINGLE;
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<IEmployeeSettings>(url,
      {
        headers: headers,
      });
  }


  public update(body: IEmployeeSettings) {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + UserSettingsRepositoryService.UPDATE;
    this.logger.debug('Executing request: ' + url);

    this.httpClient.put<IEmployeeSettings>(url, body,
      {
        headers: headers,
      }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );

    return null;
  }
}
