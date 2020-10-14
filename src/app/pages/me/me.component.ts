import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserRepositoryService} from 'src/app/core/api/repository/user/user-repository.service';
import {LoggerService} from '../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../core/utils/subscription/subscription.service';
import {IEmployee} from '../../core/api/models/IEmployee';
import {LocalizationService} from '../../core/utils/localization/localization.service';
import {SnackService} from '../../core/utils/snake/snack.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit, OnDestroy {
  constructor(
    private _userRepository: UserRepositoryService,
    private _localeService: LocalizationService,
    private _snakeService: SnackService,
  ) {
  }

  get localeService(): LocalizationService {
    return this._localeService;
  }

  ngOnInit(): void {
    this._logger = LoggerService.build(MeComponent.name);
    this._subscriptionService = new SubscriptionService();
    //this._userRepo.getMyself().toPromise().then(loadUserDetails(value))

    this._subscriptionService.add(this._userRepository.getMyself().subscribe(
      response => {
        this._userObj = response;
      }
    ), 'MeComponent#ngOnInit');
  }

  private _logger: LoggerService;
  private _subscriptionService: SubscriptionService;
  private _userObj: IEmployee;

  private _shownPill: number;

  ngOnDestroy(): void {
    this._subscriptionService.unsubscribe();
  }

  saveProfileChanges() {
    this._userRepository.update(this.userObj).subscribe(value => {
        console.log(value);
        this._snakeService.info('Saved Changes!');
      },
      error => this._snakeService.error('Error Saving Changes'));
  }

  get shownPill(): number {
    return this._shownPill;
  }

  get userObj(): IEmployee {
    return this._userObj;
  }

  /**
   * Getter state
   * @return {number}
   */
  public get hasProfileImage(): boolean {
    return false;
  }

  show(id: number) {
    this._shownPill = id;
  }

  uploadProfileImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        const image = event.target.result;
      };
    }
  }
}
