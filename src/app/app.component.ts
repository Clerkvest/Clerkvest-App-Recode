import { LoggerService } from './core/logger/logger.service';
import { Component } from '@angular/core';
import { LocalizationService } from './core/localization/localization.service';
import { ILocalization } from './core/localization/ilocalization';
import { SubscriptionService } from './core/subscription/subscription.service';
import { CookieService } from './core/cookie/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public logger: LoggerService = LoggerService.build(AppComponent.name);

  private localized: ILocalization;

  constructor(private localization: LocalizationService, private subscriptionSerivce: SubscriptionService, private cookie: CookieService) {
    this.logger.info('Creating application');

    // let httpResult = subscriptionSerivce.httpResult(this.localization.getLocalizedStrings());
    // console.log(httpResult);
  }
}
