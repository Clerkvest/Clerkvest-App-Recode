import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { State } from 'src/app/core/utils/state/state';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { UserRepositoryService } from 'src/app/core/api/repository/user/user-repository.service';
import { LoginEmailInputComponent } from '../login-email-input/login-email-input.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { TokenRepositoryService } from 'src/app/core/api/repository/token/token-repository.service';

@Component({
  selector: 'login-auth-manually',
  templateUrl: './login-auth-manually.component.html',
  styleUrls: ['./login-auth-manually.component.scss']
})
export class LoginAuthManuallyComponent implements OnInit {

  @ViewChild('textfieldAuth')
  private _textfieldAuthElemt: ElementRef;

  @Output('authSuccessful')
  private _authSuccessful: EventEmitter<any> = new EventEmitter();

  private _logger: LoggerService;
  private _subscription: SubscriptionService;

  private _authValidity: State;
  private _httpError: HttpErrorResponse;

  constructor(
    private _router: Router,
    private _cookieService: CookieService,
    private _localizationService: LocalizationService,
    private _tokenRepository: TokenRepositoryService,
  ) { }

  ngOnInit(): void {
    this._logger = LoggerService.build(LoginEmailInputComponent.name);
    this._subscription = new SubscriptionService();
    this._authValidity = new State();
  }

  public auth(): void {
    this.setAuthValidity();

    if (this._authValidity.isFalse()) {
      this._logger.warn('Auth is not valid');
      return;
    }

    this._subscription.add(
      this._tokenRepository.getApiKey(this._textfieldAuthElemt.nativeElement.value).subscribe(
        response => {
          this._router.navigate(['']);
        },
        err => {
          this._httpError = err;
          this._logger.httpRequestError(this._httpError);
        }
      ), 'LoginAuthManuallyComponent#auth()'
    );
  }

  public setAuthValidity() {
    this._authValidity.value = this._textfieldAuthElemt.nativeElement.validity.valid;
    this._logger.debug('Current textfieldAuth validity: ' + this._authValidity.value);
  }

    /**
     * Getter textfieldAuthElemt
     * @return {ElementRef}
     */
	public get textfieldAuthElemt(): ElementRef {
		return this._textfieldAuthElemt;
	}

    /**
     * Getter authSuccessful
     * @return {EventEmitter<any> }
     */
	public get authSuccessful(): EventEmitter<any>  {
		return this._authSuccessful;
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
     * Getter authValidity
     * @return {State}
     */
	public get authValidity(): State {
		return this._authValidity;
	}

    /**
     * Getter httpError
     * @return {HttpErrorResponse}
     */
	public get httpError(): HttpErrorResponse {
		return this._httpError;
	}

    /**
     * Setter textfieldAuthElemt
     * @param {ElementRef} value
     */
	public set textfieldAuthElemt(value: ElementRef) {
		this._textfieldAuthElemt = value;
	}

    /**
     * Setter authSuccessful
     * @param {EventEmitter<any> } value
     */
	public set authSuccessful(value: EventEmitter<any> ) {
		this._authSuccessful = value;
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
     * Setter authValidity
     * @param {State} value
     */
	public set authValidity(value: State) {
		this._authValidity = value;
	}

    /**
     * Setter httpError
     * @param {HttpErrorResponse} value
     */
	public set httpError(value: HttpErrorResponse) {
		this._httpError = value;
	}

}
