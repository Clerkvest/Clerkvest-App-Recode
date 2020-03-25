import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoggerService } from 'src/app/core/logger/logger.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public static readonly SHOW: string = 'show';
  public static readonly HIDE: string = 'hide';

  public static readonly SUCCESS: string = 'success';
  public static readonly INFO: string = 'info';
  public static readonly ERROR: string = 'error';

  public logger: LoggerService = LoggerService.build(NotificationComponent.name);

  @ViewChild('container') public containerElemt: ElementRef;

  @ViewChild('title') public titleElemt: ElementRef;

  @ViewChild('time') public timeElemt: ElementRef;

  @ViewChild('text') public textElemt: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  public success(title: string, text: string, duration?: number) {
    this.logger.debug('Opening success notification. ' + title + ' ' + text + ' for ' + isNullOrUndefined(duration) ? 3000 : duration + 'ms.');

    this.setTitleAndText(title, text);
    this.setCurrentTime();
    this.setClass(NotificationComponent.SUCCESS);
    this.setTimeout(NotificationComponent.SUCCESS, duration);
  }

  public info(title: string, text: string, duration?: number) {
    this.logger.debug('Opening info notification. ' + title + ' ' + text + ' for ' + isNullOrUndefined(duration) ? 3000 : duration + 'ms.');
    
    this.setTitleAndText(title, text);
    this.setCurrentTime();
    this.setClass(NotificationComponent.INFO);
    this.setTimeout(NotificationComponent.INFO, duration);
  }

  public error(title: string, text: string, duration?: number) {
    this.logger.debug('Opening error notification. ' + title + ' ' + text + ' for ' + isNullOrUndefined(duration) ? 3000 : duration + 'ms.');

    this.setTitleAndText(title, text);
    this.setCurrentTime();
    this.setClass(NotificationComponent.ERROR);
    this.setTimeout(NotificationComponent.ERROR, duration);
  }

  private setTitleAndText(title: string, text: string) {
    this.titleElemt.nativeElement.innerHTML = title;
    this.textElemt.nativeElement.innerHTML = text;
  }

  private setCurrentTime() {

    let now = new Date();

    let date = 
      now.getDate() + '.' + 
      (now.getMonth() + 1) + '.' + 
      now.getFullYear() + ' ' + 
      now.getHours() + ':' + 
      now.getMinutes() + ':' + 
      now.getSeconds();

    this.timeElemt.nativeElement.innerHTML = date;
  }

  private setTimeout(clazz: string, duration?: number) {
    setTimeout(() => {
      this.containerElemt.nativeElement.classList.replace(NotificationComponent.SHOW, NotificationComponent.HIDE);
      this.resetClass(clazz);
    }, isNullOrUndefined(duration) ? 3000 : duration);
  }

  private setClass(clazz: string) {
    this.containerElemt.nativeElement.classList.replace(NotificationComponent.HIDE, NotificationComponent.SHOW);
    this.containerElemt.nativeElement.classList.add(clazz);
  }

  private resetClass(clazz: string) {
    setTimeout(() => {
      this.containerElemt.nativeElement.classList.remove(clazz);
    }, 300);
  }
}
