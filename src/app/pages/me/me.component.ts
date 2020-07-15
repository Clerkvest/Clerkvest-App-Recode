import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserRepositoryService} from 'src/app/core/api/repository/user/user-repository.service';
import {LoggerService} from '../../core/utils/logger/logger.service';
import {SubscriptionService} from '../../core/utils/subscription/subscription.service';
import {IEmployee} from '../../core/api/models/IEmployee';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit, OnDestroy {

  private _logger: LoggerService;
  private _subscriptionService: SubscriptionService;
  private _userRepo: UserRepositoryService;

  constructor(private _userRepository: UserRepositoryService) {
    this._userRepo = _userRepository;
  }

  private _userObj: IEmployee;

  get userObj(): IEmployee {
    return this._userObj;
  }

  get myProjects(): [] {
    return [];
  }

  /**
   * Getter state
   * @return {number}
   */
  public get hasProfileImage(): boolean {
    return false;
  }

  get myInvestments(): [] {
    return [];
  }

  ngOnInit(): void {
    this._logger = LoggerService.build(MeComponent.name);
    this._subscriptionService = new SubscriptionService();
    //this._userRepo.getMyself().toPromise().then(loadUserDetails(value))

    this._subscriptionService.add(this._userRepo.getMyself().subscribe(
      response => {
        this._userObj = response;
      },
      err => {

      },
      () => {

      }
    ), 'MeComponent#ngOnInit');
  }

  ngOnDestroy(): void {
    this._subscriptionService.unsubscribe();
  }

  saveProfileChanges() {
  }

  saveNotificationChanges() {

  }
}
