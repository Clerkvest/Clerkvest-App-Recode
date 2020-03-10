import { Observable } from 'rxjs';
import { SubscriptionService } from './core/subscription/subscription.service';
import { LoggerService } from './core/logger/logger.service';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Clerkvest-App';

  constructor(private logger: LoggerService, private subscriptionService: SubscriptionService) {
    subscriptionService.add(new Observable<any>().subscribe());
    subscriptionService.add(new Observable<any>().subscribe());
    subscriptionService.unsubscribe();
  }
}
