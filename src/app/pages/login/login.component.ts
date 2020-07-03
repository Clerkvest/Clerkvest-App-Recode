import { Component, OnInit, ElementRef, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { UserRepositoryService } from 'src/app/core/api/repository/user/user-repository.service';
import { TokenRepositoryService } from 'src/app/core/api/repository/token/token-repository.service';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { Cookies, CookieTime } from 'src/app/core/utils/cookie/cookie';
import { Router } from '@angular/router';
import { State } from 'src/app/core/utils/state/state';
import { HttpErrorResponse } from '@angular/common/http';
import { ILocalizedComponent } from 'src/app/core/utils/localization/ILocalizedComponent';
import { Localization } from 'src/app/core/utils/localization/ilocalization';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy, ILocalizedComponent {

  public static readonly STATE_EMAIL: number = 0;
  public static readonly STATE_SEND: number = 1;
  public static readonly STATE_MANUALLY: number = 2;
  public static readonly STATE_LANG_SELECTOR: number = 3;
  public static readonly STATE_LOADING: number = 4;

  LoginComponent = LoginComponent;

  private _logger: LoggerService;
  private _subscription: SubscriptionService;

  private _state: number;
  private _lastState: number;

  constructor(
    private _localizationService: LocalizationService
  ) {
    this._logger = LoggerService.build(LoginComponent.name);
    this._subscription = new SubscriptionService();
  }

  ngOnInit(): void {
    this._state = LoginComponent.STATE_EMAIL;
  }

  ngOnDestroy(): void {
  }

  localizedStrings(): Localization {
    return this._localizationService.localized;
  }
  currentLocalization(): string {
    return this._localizationService.getCurrentLocalization();
  }

  public emailSend(): void {
    this._logger.debug('Changing view: E-Mail has been send');
    this._state = LoginComponent.STATE_SEND;
  }

  public authManually(): void {
    this._logger.debug('Changing view: Enter manually');
    this._state = LoginComponent.STATE_MANUALLY;
  }

  public openLanguageSelector() {
    this._logger.debug('Changing view: User wants to choose language');
    this._lastState = this.state;
    this._state = LoginComponent.STATE_LANG_SELECTOR;
  }

  public closeLanguageSelector() {
    this._logger.debug('Changing view: Closing language selector');
    this._state = this._lastState;
    this._lastState = undefined;
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
     * Getter state
     * @return {number}
     */
	public get state(): number {
		return this._state;
	}

    /**
     * Getter lastState
     * @return {number}
     */
	public get lastState(): number {
		return this._lastState;
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
     * Setter state
     * @param {number} value
     */
	public set state(value: number) {
		this._state = value;
	}

    /**
     * Setter lastState
     * @param {number} value
     */
	public set lastState(value: number) {
		this._lastState = value;
	}

}
