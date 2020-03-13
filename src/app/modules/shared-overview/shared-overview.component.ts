import { LoggerService } from './../../core/logger/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-shared-overview',
  templateUrl: './shared-overview.component.html',
  styleUrls: ['./shared-overview.component.scss']
})
export class SharedOverviewComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  changeListener($event: any) {
    this.logger.debug($event);
  }

  onClick() {
    console.log("Clicked Simple");
  }
}
