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

  constructor() {
    this.logger.debug('Test');
  }
}
