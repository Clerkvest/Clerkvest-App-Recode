import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import { SubscriptionService } from './subscription.service';
import { HttpResult } from './http-result';

describe('SubscriptionService', () => {
  let service: SubscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created with a empty list', () => {
    expect(service.getSubscriptions().length).toBe(0);
  });

  it('should have at least one element inside of the list', () => {
    expect(service.getSubscriptions().length).toBe(0);

    service.add(new Observable().subscribe());
    expect(service.getSubscriptions().length).toBe(1)

    service.add(new Observable().subscribe());
    expect(service.getSubscriptions().length).toBe(2)

    service.add(new Observable().subscribe());
    service.add(new Observable().subscribe());
    expect(service.getSubscriptions().length).toBe(4)
  });

  it('should have clear the list', () => {
    service.add(new Observable().subscribe());
    expect(service.getSubscriptions().length).toBe(1)

    service.add(new Observable().subscribe());
    expect(service.getSubscriptions().length).toBe(2)

    service.add(new Observable().subscribe());
    service.add(new Observable().subscribe());
    expect(service.getSubscriptions().length).toBe(4)

    service.unsubscribe();
    expect(service.getSubscriptions().length).toBe(0)
  });

  it('should have a defined result set', () => {
    let result: HttpResult = service.httpResult(new Observable());
    expect(result).toBeDefined();
  });
});
