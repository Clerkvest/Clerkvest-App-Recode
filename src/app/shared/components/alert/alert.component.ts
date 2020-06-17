import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {


  public static readonly SHOW: string = 'show';
  public static readonly HIDE: string = 'hide';

  public static readonly FA: string = 'fa';
  public static readonly CHECK_IMAGE: string = 'fa-check-circle'
  public static readonly INFO_IMAGE: string = 'fa-info-circle'
  public static readonly TIMES_IMAGE: string = 'fa-times-circle';

  public static readonly SUCCESS: string = 'success';
  public static readonly INFO: string = 'info';
  public static readonly ERROR: string = 'error';

  public logger: LoggerService = LoggerService.build(AlertComponent.name);

  @ViewChild('container') public containerElemt: ElementRef;

  @ViewChild('title') public titleElemt: ElementRef;

  @ViewChild('text') public textElemt: ElementRef;

  @ViewChild('image') public imageElemt: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  public success(title: string, text: string, duration?: number) {
    this.logger.debug('Opening success notification \'' + title + ' ' + text + '\' for ' + (isNullOrUndefined(duration) ? 3000 : duration) + 'ms.');

    this.setTitleAndText(title, text);
    this.setImage(AlertComponent.CHECK_IMAGE);
    this.setClass(AlertComponent.SUCCESS);
    this.setTimeout(AlertComponent.SUCCESS, duration);
  }

  public info(title: string, text: string, duration?: number) {
    this.logger.debug('Opening info notification \'' + title + ' ' + text + '\' for ' + (isNullOrUndefined(duration) ? 3000 : duration) + 'ms.');

    this.setTitleAndText(title, text);
    this.setImage(AlertComponent.INFO_IMAGE);
    this.setClass(AlertComponent.INFO);
    this.setTimeout(AlertComponent.INFO, duration);
  }

  public error(title: string, text: string, duration?: number) {
    this.logger.debug('Opening error notification \'' + title + ' ' + text + '\' for ' + (isNullOrUndefined(duration) ? 3000 : duration) + 'ms.');

    this.setTitleAndText(title, text);
    this.setImage(AlertComponent.TIMES_IMAGE);
    this.setClass(AlertComponent.ERROR);
    this.setTimeout(AlertComponent.ERROR, duration);
  }

  private setTitleAndText(title: string, text: string) {
    this.titleElemt.nativeElement.innerHTML = title;
    this.textElemt.nativeElement.innerHTML = text;
  }

  private setTimeout(clazz: string, duration?: number) {
    setTimeout(() => {
      this.containerElemt.nativeElement.classList.replace(AlertComponent.SHOW, AlertComponent.HIDE);
      this.resetClass(clazz);
    }, isNullOrUndefined(duration) ? 3000 : duration);
  }

  private setImage(image: string) {
    while (this.imageElemt.nativeElement.classList.length > 0) {
      this.imageElemt.nativeElement.classList.remove(
        this.imageElemt.nativeElement.classList.item(0)
      );
    }

    this.imageElemt.nativeElement.classList.add(AlertComponent.FA);
    this.imageElemt.nativeElement.classList.add(image);
  }

  private setClass(clazz: string) {
    this.containerElemt.nativeElement.classList.replace(AlertComponent.HIDE, AlertComponent.SHOW);
    this.containerElemt.nativeElement.classList.add(clazz);
  }

  private resetClass(clazz: string) {
    setTimeout(() => {
      this.containerElemt.nativeElement.classList.remove(clazz);
    }, 300);
  }
}
