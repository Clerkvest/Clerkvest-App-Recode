import { isNullOrUndefined } from 'util';
import { LoggerService } from './../logger/logger.service';
import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { HttpResult } from './http-result';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private logger: LoggerService = LoggerService.build(SubscriptionService.name);

  private subscriptions: Subscription[] = [];

  constructor() {
    this.logger.debug('Creating instance of ' + SubscriptionService.name);
  }

  public add(subscription: Subscription) {
    this.logger.debug('Subscribing ' + subscription);
    this.subscriptions.push(subscription);
  }

  public unsubscribe() {
    this.subscriptions.forEach(subscription => {
      if(!isNullOrUndefined(subscription)) {
        this.logger.debug('Unsubscribing ' + subscription);
        subscription.unsubscribe();
      }
    });

    this.subscriptions = [];
  }

  public httpResult(observable: Observable<any>): HttpResult {
    let result = new HttpResult();

    let tempSub: Subscription = observable.subscribe(
      object => {
        result.wasSuccessful = true;
        result.resultObject = object;

        this.logger.debug('Http result: ' + result);
      },
      error => {
        result.wasSuccessful = false;
        result.resultObject = error;

        this.logger.error('Http result: ' + result);
      },
      () => {
        this.logger.debug('httpResult completed');
        tempSub.unsubscribe();
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
