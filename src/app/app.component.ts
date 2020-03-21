import { IProjectImage } from './core/api/models/IProjectImage';
import { ProjectRepositoryService } from './core/api/repository/project/project-repository.service';
import { LoggerService } from './core/logger/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public logger: LoggerService = LoggerService.build(AppComponent.name);

  constructor() {
    this.logger.info('Creating application');
  }
}
