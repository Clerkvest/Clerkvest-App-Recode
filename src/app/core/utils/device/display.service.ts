import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  public logger: LoggerService = LoggerService.build(DisplayService.name);

  public static readonly BREAKPOINT_MOBILE: number = 768;
  public static readonly BREAKPOINT_TABLET: number = 992;

  private isMobile: boolean = false;

  private height: Number;
  private width: Number;

  constructor() { }

  public onResize() {
    this.width = window.innerWidth;

    if(this.width <= DisplayService.BREAKPOINT_TABLET) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  public getIsMobile() {
    return this.isMobile;
  }
}
