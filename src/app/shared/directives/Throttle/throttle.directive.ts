import { Directive, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { Subject } from 'rxjs';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { debounceTime, throttleTime } from 'rxjs/operators';

@Directive({
  selector: '[throttle]'
})
export class ThrottleDirective {

  @Output()
  public onThrottle = new EventEmitter<any>();

  @Input('throttle')
  public throttleTime: number = 300;

  public logger: LoggerService;
  public subscription: SubscriptionService;

  private subject: Subject<any>;

  constructor() {
    this.logger = LoggerService.build(ThrottleDirective.name);
    this.subscription = new SubscriptionService();
    this.subject = new Subject();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.subject
        .pipe(throttleTime(this.throttleTime))
        .subscribe(event => {
          this.onThrottle.emit(event);
          this.logger.debug(`Emitting throttled event: ${event.type}`);
        }
      ), 'ThrottleDirective#ngOnInit()'
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event) {
    this.subject.next(event);
  }

  @HostListener('click', ['$event'])
  onClick(event) {
    this.subject.next(event);
  }
}
