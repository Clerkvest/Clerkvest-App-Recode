import { ProjectEndpointService } from './core/api/endpoints/project/project-endpoint.service';
import { LoggerService } from './core/logger/logger.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clerkvest-App';

  private logger: LoggerService = LoggerService.build(AppComponent.name);

  constructor(private ProjectEndpointService: ProjectEndpointService) {
    ProjectEndpointService.getAllUsingGET().subscribe(e => this.logger.debug(e));
  }
}
