import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('width')
  private _width: string = '100%';

  @Input('height')
  private _height: string = '300px';

  @Input('title')
  private _title: string;

  @Input('titleColor')
  private _titleColor: string;

  @Input('clickableTitle')
  private _clickableTitle: boolean = true;

  @Input('subTitle')
  private _subTitle: string;

  @Input('subTitleColor')
  private _subTitleColor: string;

  @Output('onTitleClick')
  private _onTitleClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClickTitle() {
    this._onTitleClick.emit('clicked');
  }

    /**
     * Getter title
     * @return {string }
     */
	public get title(): string  {
		return this._title;
	}

    /**
     * Getter clickableTitle
     * @return {boolean }
     */
	public get clickableTitle(): boolean  {
		return this._clickableTitle;
	}

    /**
     * Getter subTitle
     * @return {string }
     */
	public get subTitle(): string  {
		return this._subTitle;
	}

    /**
     * Getter onTitleClick
     * @return {EventEmitter<any> }
     */
	public get onTitleClick(): EventEmitter<any>  {
		return this._onTitleClick;
	}

    /**
     * Setter title
     * @param {string } value
     */
	public set title(value: string ) {
		this._title = value;
	}

    /**
     * Setter clickableTitle
     * @param {boolean } value
     */
	public set clickableTitle(value: boolean ) {
		this._clickableTitle = value;
	}

    /**
     * Setter subTitle
     * @param {string } value
     */
	public set subTitle(value: string ) {
		this._subTitle = value;
	}

    /**
     * Setter onTitleClick
     * @param {EventEmitter<any> } value
     */
	public set onTitleClick(value: EventEmitter<any> ) {
		this._onTitleClick = value;
	}

    /**
     * Getter width
     * @return {string }
     */
	public get width(): string  {
		return this._width;
	}

    /**
     * Getter height
     * @return {string }
     */
	public get height(): string  {
		return this._height;
	}

    /**
     * Setter width
     * @param {string } value
     */
	public set width(value: string ) {
		this._width = value;
	}

    /**
     * Setter height
     * @param {string } value
     */
	public set height(value: string ) {
		this._height = value;
	}

    /**
     * Getter titleColor
     * @return {string}
     */
	public get titleColor(): string {
		return this._titleColor;
	}

    /**
     * Getter subTitleColor
     * @return {string}
     */
	public get subTitleColor(): string {
		return this._subTitleColor;
	}

    /**
     * Setter titleColor
     * @param {string} value
     */
	public set titleColor(value: string) {
		this._titleColor = value;
	}

    /**
     * Setter subTitleColor
     * @param {string} value
     */
	public set subTitleColor(value: string) {
		this._subTitleColor = value;
	}

}
