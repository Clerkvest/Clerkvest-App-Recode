import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { State } from 'src/app/core/utils/state/state';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { UserRepositoryService } from 'src/app/core/api/repository/user/user-repository.service';
import { LoginEmailInputComponent } from '../login-email-input/login-email-input.component';
import { ILocalizedComponent } from 'src/app/core/utils/localization/ILocalizedComponent';
import { Localization } from 'src/app/core/utils/localization/ilocalization';

@Component({
  selector: 'login-email-send',
  templateUrl: './login-email-send.component.html',
  styleUrls: ['./login-email-send.component.scss']
})
export class LoginEmailSendComponent implements OnInit, OnDestroy {

  @Output('authManually')
  private _authManually: EventEmitter<any> = new EventEmitter();

  private _logger: LoggerService;

  constructor(
    private _cookieService: CookieService,
    private _localizationService: LocalizationService,
  ) { }

  ngOnInit(): void {
    this._logger = LoggerService.build(LoginEmailSendComponent.name);
  }

  ngOnDestroy(): void {
  }

  public enterManually(): void {
    this._authManually.emit();
  }

    /**
     * Getter authManually
     * @return {EventEmitter<any> }
     */
	public get authManually(): EventEmitter<any>  {
		return this._authManually;
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
     * Setter authManually
     * @param {EventEmitter<any> } value
     */
	public set authManually(value: EventEmitter<any> ) {
		this._authManually = value;
	}

    /**
     * Setter logger
     * @param {LoggerService} value
     */
	public set logger(value: LoggerService) {
		this._logger = value;
	}

}
