import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'monetary-units',
  templateUrl: './monetary-units.component.html',
  styleUrls: ['./monetary-units.component.scss']
})
export class MonetaryUnitsComponent implements OnInit {

  @Input('value')
  private _value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

    /**
     * Getter value
     * @return {number }
     */
	public get value(): number  {
		return this._value;
	}

    /**
     * Setter value
     * @param {number } value
     */
	public set value(value: number ) {
		this._value = value;
	}

}
