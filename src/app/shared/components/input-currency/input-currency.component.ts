import { LoggerService } from './../../../core/logger/logger.service';
import { logging } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})
export class InputCurrencyComponent implements OnInit {

  private static readonly commaOffset = 1;

  @Input() value: string = '';

  @Input() currency: string = '€';

  @Input() decimalPlaces: number = 2;

  @Output() changeListener = new EventEmitter();

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    let parsed: number = parseFloat(value);

    this.value = parseFloat(parsed.toString()).toFixed(2);
    this.changeListener.emit(this.value);
  }
}
