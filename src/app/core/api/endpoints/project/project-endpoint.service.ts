import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from './../configuration.service';
import { LoggerService } from './../../../logger/logger.service';
import { Injectable } from '@angular/core';
import { IProjectImage } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectEndpointService {

  private logger: LoggerService = LoggerService.build(ProjectEndpointService.name);

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getAllUsingGET(): Observable<Array<IProjectImage>> {
    let headers = this.configuration.getHeaders();

    this.logger.debug('http request using get with headers: ' + headers);

    return this.httpClient.get<Array<IProjectImage>>(`${this.basePath}/project/all/image`,
    {
        withCredentials: false,
        headers: headers,
    });
  }
}
