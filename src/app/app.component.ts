
import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/utils/logger/logger.service';
import { DisplayService } from './core/utils/device/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public logger: LoggerService = LoggerService.build(AppComponent.name);

  constructor(
    public displayService: DisplayService,
  ) {
    this.logger.info('Creating application');
  }

  ngOnInit(): void {
    this.displayService.onResize();
  }
}
