import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ImageRepositoryService {

  public logger: LoggerService = LoggerService.build(ImageRepositoryService.name);

  public static readonly SERVICE_BASE: string = '/image/'

  private static readonly GET_SINGLE: string = ImageRepositoryService.SERVICE_BASE + 'get/';
  private static readonly CREATE_COMPANY: string = ImageRepositoryService.SERVICE_BASE + 'create/company/';
  private static readonly CREATE_PROJECT: string = ImageRepositoryService.SERVICE_BASE + 'create/project/';

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getById(id: number): Observable<string> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ImageRepositoryService.GET_SINGLE + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    return this.httpClient.get<string>(url,
    {
        headers: headers,
    });
  }

  public createForCompany(file: Blob, id: number): Observable<number> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ImageRepositoryService.CREATE_COMPANY + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    let formParams: { append(param: string, value: any): void; };
    formParams = new FormData();
    formParams.append('file', <any>file);

    return this.httpClient.post<number>(url, formParams,
    {
        headers: headers,
    });
  }

  public createForProject(file: Blob, id: number): Observable<number> {
    let headers = this.configuration.getHeaders();
    let url = this.basePath + ImageRepositoryService.CREATE_PROJECT + encodeURIComponent(String(id));
    this.logger.debug('Executing request: ' + url);

    let formParams: { append(param: string, value: any): void; };
    formParams = new FormData();
    formParams.append('file', <any>file);

    return this.httpClient.post<number>(url, formParams,
    {
        headers: headers,
    });
  }
}
