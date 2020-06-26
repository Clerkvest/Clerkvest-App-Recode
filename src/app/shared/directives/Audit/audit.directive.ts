import { Directive, Output, EventEmitter, Input, HostListener } from '@angular/core';
import { auditTime } from 'rxjs/operators';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { Subject } from 'rxjs';
import { SubscriptionService } from 'src/app/core/utils/subscription/subscription.service';

@Directive({
  selector: '[audit]'
})
export class AuditDirective {

  @Output()
  public onAudit = new EventEmitter<any>();

  @Input('audit')
  public auditTime: number = 300;

  public logger: LoggerService = LoggerService.build(AuditDirective.name);

  private subject: Subject<any> = new Subject();

  private subscription: SubscriptionService = new SubscriptionService();

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(
      this.subject
        .pipe(auditTime(this.auditTime))
        .subscribe(event => {
          this.onAudit.emit(event);
          this.logger.debug(`Emitting audit event: ${event.type}`);
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
