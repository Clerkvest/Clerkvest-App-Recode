import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../configuration.service';
import { LoggerService } from '../../../logger/logger.service';
import { Injectable } from '@angular/core';
import { IProjectImage } from '../../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectRepositoryService {

  private logger: LoggerService = LoggerService.build(ProjectRepositoryService.name);

  private basePath: string;

  constructor(private configuration: ConfigurationService, private httpClient: HttpClient) {
    this.basePath = configuration.getBasePath();
  }

  public getAll(): Observable<Array<IProjectImage>> {
    let headers = this.configuration.getHeaders();

    this.logger.debug('Executing request: ' + `${this.basePath}/project/all/image`);

    return this.httpClient.get<Array<IProjectImage>>(`${this.basePath}/project/all/image`,
    {
        withCredentials: false,
        headers: headers,
    });
  }

  public getById() {}

  public create(): Observable<any> {
    return null;
  }

  public update() {}

  public deleteById() {}

}
