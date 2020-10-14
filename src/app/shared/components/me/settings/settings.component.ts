import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from '../../../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../../../core/utils/subscription/subscription.service';
import {IEmployeeSettings} from '../../../../core/api/models/IEmployeeSettings';
import {UserSettingsRepositoryService} from '../../../../core/api/repository/user/settings/user-settings-repository.service';
import {LocalizationService} from '../../../../core/utils/localization/localization.service';
import {SnackService} from '../../../../core/utils/snake/snack.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private _logger: LoggerService;
  private _subscriptionService: SubscriptionService;

  constructor(private userSettingsRepositoryService: UserSettingsRepositoryService,
              private _localizationService: LocalizationService,
              private _snackService: SnackService) {
  }

  private _settingsObj: IEmployeeSettings;

  get settingsObj(): IEmployeeSettings {
    return this._settingsObj;
  }

  set settingsObj(value: IEmployeeSettings) {
    this._settingsObj = value;
  }

  ngOnInit(): void {
    this._logger = LoggerService.build(SettingsComponent.name);
    this._subscriptionService = new SubscriptionService();
    //this._userRepo.getMyself().toPromise().then(loadUserDetails(value))

    this._subscriptionService.add(this.userSettingsRepositoryService.getForSelf().subscribe(
      response => {
        this._settingsObj = response;
      }
    ), 'MeComponent#ngOnInit');
  }

  ngOnDestroy(): void {
    this._subscriptionService.unsubscribe();
  }

  saveNotificationChanges() {
    this.userSettingsRepositoryService.update(this.settingsObj).subscribe(
      response => {
        this._snackService.info('Successfully Updated Settings');
      },
      error => {
        this._snackService.error('Error While Updating Settings');
      },
      () => {

      });
  }

  get localizationService(): LocalizationService {
    return this._localizationService;
  }
}
