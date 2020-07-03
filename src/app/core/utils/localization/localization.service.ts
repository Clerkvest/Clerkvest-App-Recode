import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../logger/logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Localization } from './ilocalization';
import { Language } from './language.enum';
import { CookieService } from '../cookie/cookie.service';
import { Cookies, CookieTime } from '../cookie/cookie';
import { SubscriptionService } from '../subscription/subscription.service';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {

  private static readonly JSON_BASE: string = 'assets/localization/localization.';
  private static readonly JSON_END: string = '.json';

  private _logger: LoggerService;
  private _subscription: SubscriptionService;
  private _localized: Localization;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {
    this._logger = LoggerService.build(LocalizationService.name);
    this._subscription = new SubscriptionService();
    this._localized = new Localization();

    this._subscription.add(
      this.getLocalizedStrings().subscribe(
        result => {
          this._localized = result;
          this._logger.info('Successfully initialized localization');
        },
        err => {
          this._logger.warn('Failed to initialize localization');
        }
      ), 'LocalizationService#ngOnInit()'
    );
  }

  public getLocalizedStrings(): Observable<Localization> {
    if (!this.cookieService.check(Cookies.LANGUAGE)) {
      this.cookieService.set(Cookies.LANGUAGE, Language.EN, CookieTime.YEAR);
    }

    let cookieValue = this.cookieService.get(Cookies.LANGUAGE);
    if (!Object.values(Language).some(val => val === cookieValue)) {
      this._logger.info('Unknown language code reset to default');
      this.cookieService.set(Cookies.LANGUAGE, Language.EN, CookieTime.YEAR);
      cookieValue = Language.EN;
    }

    return this.httpClient.get<Localization>(LocalizationService.JSON_BASE + cookieValue + LocalizationService.JSON_END);
  }

  public getCurrentLocalization(): string {
    if (!this.cookieService.check(Cookies.LANGUAGE)) {
      return Language.EN;
    } else {
      return this.cookieService.get(Cookies.LANGUAGE);
    }
  }

  public update() {
    this._subscription.unsubscribe();

    this._subscription.add(
      this.getLocalizedStrings().subscribe(
        result => {
          this._localized = result;
          this._logger.info('Successfully updated localization');
        },
        err => {
          this._logger.warn('Failed to update localization');
        }
      ), 'LocalizationService#ngOnInit()'
    );
  }

    /**
     * Getter logger
     * @return {LoggerService}
     */
	public get logger(): LoggerService {
		return this._logger;
	}

    /**
     * Getter subscription
     * @return {SubscriptionService}
     */
	public get subscription(): SubscriptionService {
		return this._subscription;
	}

    /**
     * Getter localized
     * @return {Localization}
     */
	public get localized(): Localization {
		return this._localized;
	}

    /**
     * Setter logger
     * @param {LoggerService} value
     */
	public set logger(value: LoggerService) {
		this._logger = value;
	}

    /**
     * Setter subscription
     * @param {SubscriptionService} value
     */
	public set subscription(value: SubscriptionService) {
		this._subscription = value;
	}

    /**
     * Setter localized
     * @param {Localization} value
     */
	public set localized(value: Localization) {
		this._localized = value;
	}

}
