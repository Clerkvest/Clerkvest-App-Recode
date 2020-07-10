import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { State } from 'src/app/core/utils/state/state';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { UserRepositoryService } from 'src/app/core/api/repository/user/user-repository.service';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { ILocalizedComponent } from 'src/app/core/utils/localization/ILocalizedComponent';
import { Localization } from 'src/app/core/utils/localization/ilocalization';
import { Cookies, CookieTime } from 'src/app/core/utils/cookie/cookie';

@Component({
  selector: 'login-email-input',
  templateUrl: './login-email-input.component.html',
  styleUrls: ['./login-email-input.component.scss']
})
export class LoginEmailInputComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('textfieldEmail')
  private _textfieldEmailElemt: ElementRef;

  @ViewChild('checkboxSave')
  private _checkboxSaveElemt: ElementRef;

  @Output('emailSend')
  private _emailSend: EventEmitter<any> = new EventEmitter();

  private _logger: LoggerService;
  private _subscription: SubscriptionService;

  private _emailValidity: State;
  private _httpError: HttpErrorResponse;

  constructor(
    private _cookieService: CookieService,
    private _localizationService: LocalizationService,
    private _userRepository: UserRepositoryService,
  ) { }

  ngOnInit(): void {
    this._logger = LoggerService.build(LoginEmailInputComponent.name);
    this._subscription = new SubscriptionService();
    this._emailValidity = new State();
  }

  ngAfterViewInit(): void {
    if (this._cookieService.check(Cookies.STORED_LOGIN)) {
      this._textfieldEmailElemt.nativeElement.value = this._cookieService.get(Cookies.STORED_LOGIN);
      this._checkboxSaveElemt.nativeElement.checked = true;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onEmailChange() {
    this.setEmailValidity();
  }

  public sendEmail() {
    this.setEmailValidity();

    if (this._emailValidity.isFalse()) {
      this._logger.warn('E-Mail is not valid');
      return;
    }

    if (this._checkboxSaveElemt.nativeElement.checked) {
      this._logger.debug('Checkbox checked');
      this._cookieService.set(Cookies.STORED_LOGIN, this._textfieldEmailElemt.nativeElement.value, CookieTime.YEAR);
    } else {
      this._cookieService.delete(Cookies.STORED_LOGIN);
    }

    this._subscription.add(
      this._userRepository.login(this._textfieldEmailElemt.nativeElement.value)
        .subscribe(
          response => {
            this._emailSend.emit(response);
          },
          err => {
            this._httpError = err;
            this._logger.httpRequestError(this._httpError);
          }
        ), 'LoginEmailInputComponent#onClickEmail()'
    );
  }

  public setEmailValidity() {
    this._emailValidity.value = this._textfieldEmailElemt.nativeElement.validity.valid;
    this._logger.debug('Current textfield_email validity: ' + this._emailValidity.value);
  }


    /**
     * Getter textfieldEmailElemt
     * @return {ElementRef}
     */
	public get textfieldEmailElemt(): ElementRef {
		return this._textfieldEmailElemt;
	}

    /**
     * Getter checkboxSaveElemt
     * @return {ElementRef}
     */
	public get checkboxSaveElemt(): ElementRef {
		return this._checkboxSaveElemt;
	}

    /**
     * Getter emailSend
     * @return {EventEmitter<any> }
     */
	public get emailSend(): EventEmitter<any>  {
		return this._emailSend;
	}

    /**
     * Getter logger
     * @return {LoggerService}
     */
	public get logger(): LoggerService {
		return this._logger;
  }

    /**
     * Getter localizationService
     * @return {LocalizationService}
     */
	public get localizationService(): LocalizationService {
		return this._localizationService;
	}

    /**
     * Getter subscription
     * @return {SubscriptionService}
     */
	public get subscription(): SubscriptionService {
		return this._subscription;
	}

    /**
     * Getter emailValidity
     * @return {State}
     */
	public get emailValidity(): State {
		return this._emailValidity;
	}

    /**
     * Getter httpError
     * @return {HttpErrorResponse}
     */
	public get httpError(): HttpErrorResponse {
		return this._httpError;
	}

    /**
     * Setter textfieldEmailElemt
     * @param {ElementRef} value
     */
	public set textfieldEmailElemt(value: ElementRef) {
		this._textfieldEmailElemt = value;
	}

    /**
     * Setter checkboxSaveElemt
     * @param {ElementRef} value
     */
	public set checkboxSaveElemt(value: ElementRef) {
		this._checkboxSaveElemt = value;
	}

    /**
     * Setter emailSend
     * @param {EventEmitter<any> } value
     */
	public set emailSend(value: EventEmitter<any> ) {
		this._emailSend = value;
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
     * Setter emailValidity
     * @param {State} value
     */
	public set emailValidity(value: State) {
		this._emailValidity = value;
	}

    /**
     * Setter httpError
     * @param {HttpErrorResponse} value
     */
	public set httpError(value: HttpErrorResponse) {
		this._httpError = value;
	}
}
