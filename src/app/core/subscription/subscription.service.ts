import { isNullOrUndefined } from 'util';
import { LoggerService } from './../logger/logger.service';
import { Injectable } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SubscriptionResult } from './subscription-result';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscriptions: Subscription[] = [];

  constructor(private logger: LoggerService) { }

  public add(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  public unsubscribe() {
    this.subscriptions.forEach(subscription => {
      if(!isNullOrUndefined(subscription)) {
        subscription.unsubscribe();
      }
    });

    this.subscriptions = [];
  }

  public httpResult(observable: Observable<any>): SubscriptionResult {
    let result = new SubscriptionResult();

    let tempSub: Subscription = observable.subscribe(
      object => {
        result.wasSuccessful = true;
        result.resultObject = object;
      },
      error => {
        result.wasSuccessful = false;
        result.resultObject = error;
      },
      () => {
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
