import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SubscriptionService } from '../utils/subscription/subscription.service';
import { LoggerService } from '../utils/logger/logger.service';
import { UserRepositoryService } from '../api/repository/user/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private _logger: LoggerService;
  private _subscription: SubscriptionService;

  constructor(private _userRepository: UserRepositoryService, private _router: Router) {
    this._logger = LoggerService.build(AuthGuardService.name);
    this._subscription = new SubscriptionService();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    this._subscription.add(
      this._userRepository.getMyself().subscribe(
        response => {
          this._logger.info('User is allowed to access the requested page');
          return true;
        },
        err => {
          this._logger.info('User is not allowed to access the requested page. Redirecting to /login');
          this._router.navigate(['/login'])
        },
        () => {
          this._subscription.unsubscribe();
        }
      ), 'AuthGuardService#canActivate()'
    );

    return true;
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

}
