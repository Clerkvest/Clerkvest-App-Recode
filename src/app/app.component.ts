import { IProjectImage } from './core/api/models/IProjectImage';
import { ProjectRepositoryService } from './core/api/repository/project/project-repository.service';
import { LoggerService } from './core/logger/logger.service';
import { Component } from '@angular/core';
import { LocalizationService } from './core/localization/localization.service';
import { ILocalization } from './core/localization/ilocalization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public logger: LoggerService = LoggerService.build(AppComponent.name);

  private localized: ILocalization;

  constructor(private localization: LocalizationService) {
    this.logger.info('Creating application');
    localization.getLocalizedStrings().subscribe(local => {
      this.localized = local;
      this.logger.debug('Localized strings: ' + this.localized.hello);
    });
  }
}
