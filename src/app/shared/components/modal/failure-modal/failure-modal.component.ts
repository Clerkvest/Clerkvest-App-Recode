import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { LoggerService } from 'src/app/core/logger/logger.service';

@Component({
  selector: 'failure-modal',
  templateUrl: './failure-modal.component.html',
  styleUrls: ['./failure-modal.component.scss']
})
export class FailureModalComponent implements OnInit {

  public logger: LoggerService = LoggerService.build(FailureModalComponent.name);

  @ViewChild('modal') public modal: ModalComponent;

  @Input('text') public text: string = "You did something pretty wrong tho.";

  @Input('btn-label') public btnLabel: string = "try again";

  constructor() { }

  ngOnInit(): void {
  }

  public display() {
    this.logger.debug("Displaying FailureModalComponent");
    this.modal.display();
  }

  public hide() {
    this.logger.debug("Hidding FailureModalComponent");
    this.modal.hide();
  }

}
