
import { Component } from '@angular/core';
import { LoggerService } from './core/utils/logger/logger.service';

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
