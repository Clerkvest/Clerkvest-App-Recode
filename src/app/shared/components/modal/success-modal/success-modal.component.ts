import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';

@Component({
  selector: 'success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  public logger: LoggerService = LoggerService.build(SuccessModalComponent.name);

  @ViewChild('modal') public modal: ModalComponent;

  @Input('text') public text: string = "You did something pretty right.";

  @Input('btn-label') public btnLabel: string = "Oke";

  constructor() { }

  ngOnInit(): void {
  }

  public display() {
    this.logger.debug("Displaying SuccessModalComponent");
    this.modal.display();
  }

  public hide() {
    this.logger.debug("Hidding SuccessModalComponent");
    this.modal.hide();
  }
}
