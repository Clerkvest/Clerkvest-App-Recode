import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NotificationComponent } from 'src/app/shared/components/notification/notification.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, AfterViewInit {

  @ViewChild(NotificationComponent) notification: NotificationComponent;

  constructor() { 
    
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  public testSucc() {
    this.notification.success('success', 'Text strin is pretty long tho. success dsadasdsad asdsa d sad asd sad as dasd sa');
  }

  public testInfo() {
    this.notification.info('info', 'Text strin is pretty long tho. info dsadasdsad asdsa d sad asd sad as dasd sa');
  }

  public testError() {
    this.notification.error('error', 'Text strin is pretty long tho. error dsadasdsad asdsa d sad asd sad as dasd sa');
  }
}
