import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SuccessModalComponent } from 'src/app/shared/components/modal/success-modal/success-modal.component';
import { FailureModalComponent } from 'src/app/shared/components/modal/failure-modal/failure-modal.component';
import { DisplayService } from 'src/app/core/utils/device/display.service';

@Component({
  selector: 'app-testground',
  templateUrl: './testground.component.html',
  styleUrls: ['./testground.component.scss']
})
export class TestgroundComponent implements OnInit {

  @ViewChild(AlertComponent) notification: AlertComponent;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @ViewChild(SuccessModalComponent) succ_modal: SuccessModalComponent;

  @ViewChild(FailureModalComponent) fail_modal: FailureModalComponent;

  constructor(public displayService: DisplayService) { }

  ngOnInit(): void {
  }

  public notification_succ() {
    this.notification.success('Successfully', 'Called from testing ground. Success message given.');
  }

  public notification_info() {
    this.notification.info('Infomation', 'Called from testing ground. Info message given.');
  }

  public notification_error() {
    this.notification.error('Error', 'Called from testing ground. Error message given.');
  }

  public open_modal() {
    this.modal.display();
  }

  public open_success_modal() {
    this.succ_modal.display();
  }

  public open_failure_modal() {
    this.fail_modal.display();
  }

  public ok() {
    console.log("OK");
  }

  public cls() {
    console.log("Cls");
  }
}
