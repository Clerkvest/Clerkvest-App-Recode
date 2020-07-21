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
  private _userObj: IEmployee;

  constructor(
    private _userRepository: UserRepositoryService
  ) {
  }

  private _shownPill: number;

  get shownPill(): number {
    return this._shownPill;
  }

  ngOnDestroy(): void {
    this._subscriptionService.unsubscribe();
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

  saveProfileChanges() {
    this._userRepository.update(this.userObj).subscribe(value => console.log(value));
  }

  show(id: number) {
    this._shownPill = id;
  }
}
