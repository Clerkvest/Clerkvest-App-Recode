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

  public logger: LoggerService;
  public subscription: SubscriptionService;

  private subject: Subject<any>;

  constructor() {
    this.logger = LoggerService.build(AuditDirective.name);
    this.subscription = new SubscriptionService();
    this.subject = new Subject();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.subject
        .pipe(auditTime(this.auditTime))
        .subscribe(event => {
          this.onAudit.emit(event);
          this.logger.debug(`Emitting audit event: ${event.type}`);
        }
      ), 'AuditDirective#ngOnInit()'
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
