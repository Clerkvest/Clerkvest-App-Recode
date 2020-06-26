import { Directive, HostListener, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Directive({
  selector: '[debounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {

  @Output()
  public onDebounce = new EventEmitter<any>();

  @Input('debounce')
  public debounceTime: number = 300;

  public logger: LoggerService = LoggerService.build(DebounceDirective.name);

  private subject: Subject<any> = new Subject();

  private subscription: SubscriptionService = new SubscriptionService();

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      this.subject
        .pipe(debounceTime(this.debounceTime))
        .subscribe(event => {
          this.onDebounce.emit(event);
          this.logger.debug(`Emitting debounced event: ${event.type}`);
        }
      )
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
