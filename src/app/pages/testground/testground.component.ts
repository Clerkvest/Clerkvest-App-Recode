import { Component, OnInit, ViewChild } from '@angular/core';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';

@Component({
  selector: 'app-testground',
  templateUrl: './testground.component.html',
  styleUrls: ['./testground.component.scss']
})
export class TestgroundComponent implements OnInit {

  @ViewChild(NotificationComponent) notification: NotificationComponent;

  constructor() { }

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
}
