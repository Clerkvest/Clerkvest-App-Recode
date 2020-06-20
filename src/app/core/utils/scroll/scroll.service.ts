import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  public logger: LoggerService = LoggerService.build(ScrollService.name);

  public static readonly THRESHOLD: number = 200;

  private isAtTop: boolean = true;

  constructor() { }

  public onScroll(): void {
    this.isAtTop = window.scrollY < ScrollService.THRESHOLD;
  }

  public getIsAtTop() {
    return this.isAtTop;
  }
}
