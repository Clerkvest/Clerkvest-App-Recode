import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public static readonly HIDE: string = 'hide';
  public static readonly SHOW: string = 'show';

  public static readonly MSG_CLOSED = 'closed';

  public logger: LoggerService = LoggerService.build(ModalComponent.name);

  @ViewChild('container') containerElemt: ElementRef;

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public display() {
    this.logger.debug('Displaying modal.');
    this.containerElemt.nativeElement.classList.replace(ModalComponent.HIDE, ModalComponent.SHOW);
  }

  public hide() {
    this.logger.debug('Hidding modal.');
    this.containerElemt.nativeElement.classList.replace(ModalComponent.SHOW, ModalComponent.HIDE);
    this.event.emit(ModalComponent.MSG_CLOSED);
  }
}
