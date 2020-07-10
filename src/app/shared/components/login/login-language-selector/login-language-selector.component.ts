import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { State } from 'src/app/core/utils/state/state';
import { HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { UserRepositoryService } from 'src/app/core/api/repository/user/user-repository.service';
import { LoginEmailInputComponent } from '../login-email-input/login-email-input.component';
import { Cookies, Cookie, CookieTime } from 'src/app/core/utils/cookie/cookie';
import { Language } from 'src/app/core/utils/localization/language.enum';
import { ILocalizedComponent } from 'src/app/core/utils/localization/ILocalizedComponent';
import { Localization } from 'src/app/core/utils/localization/ilocalization';

@Component({
  selector: 'login-language-selector',
  templateUrl: './login-language-selector.component.html',
  styleUrls: ['./login-language-selector.component.scss']
})
export class LoginLanguageSelectorComponent implements OnInit {

  @Output('languageChanged')
  private _languageChanged: EventEmitter<any> = new EventEmitter();

  private _logger: LoggerService;

  constructor(
    private _cookieService: CookieService,
    private _localizationService: LocalizationService,
  ) { }

  ngOnInit(): void {
    this._logger = LoggerService.build(LoginLanguageSelectorComponent.name);
  }

  public chooseDE() {
    this._logger.info('Changing language: ' + Language.DE);
    this._cookieService.set(Cookies.LANGUAGE, Language.DE, CookieTime.YEAR);
    this._localizationService.update();
    this._languageChanged.emit('update');
  }

  public chooseEN() {
    this._logger.info('Changing language: ' + Language.EN);
    this._cookieService.set(Cookies.LANGUAGE, Language.EN, CookieTime.YEAR);
    this._localizationService.update();
    this._languageChanged.emit('update');
  }

    /**
     * Getter languageChanged
     * @return {EventEmitter<any> }
     */
	public get languageChanged(): EventEmitter<any>  {
		return this._languageChanged;
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
     * Setter languageChanged
     * @param {EventEmitter<any> } value
     */
	public set languageChanged(value: EventEmitter<any> ) {
		this._languageChanged = value;
	}

    /**
     * Setter logger
     * @param {LoggerService} value
     */
	public set logger(value: LoggerService) {
		this._logger = value;
	}
}
