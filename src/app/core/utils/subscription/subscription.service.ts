import { isNullOrUndefined } from 'util';
import { LoggerService } from './../logger/logger.service';
import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { HttpResult } from './http-result';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private logger: LoggerService = LoggerService.build(SubscriptionService.name);

  private subscriptions: Subscription[] = [];

  constructor() {
  }

  public add(subscription: Subscription, name?: string) {
    this.logger.debug('Adding subscription: ' + (isNullOrUndefined(name) ? 'unnamed' : name));
    subscription['name'] = (isNullOrUndefined(name) ? 'unnamed' : name)
    this.subscriptions.push(subscription);
  }

  public unsubscribe() {
    this.subscriptions.forEach(subscription => {
      if(!isNullOrUndefined(subscription)) {
        this.logger.debug('Unsubscribe: ' + subscription['name']);
        subscription.unsubscribe();
      }
    });

    this.subscriptions = [];
  }

  public httpResult(observable: Observable<any>): HttpResult {
    let result = new HttpResult();

    observable.subscribe(
      val => {
        result.resultObject = val;
        result.wasSuccessful = true;
      },
      err => {
        result.resultObject = err;
        result.wasSuccessful = false;
      }
    );

    return result;
  }

  public getSubscriptions(): Subscription[] {
    return this.subscriptions;
  }

  public setSubscriptions(subscriptions: Subscription[]) {
    this.subscriptions = subscriptions;
  }
}
