import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { LoggerService } from 'src/app/core/utils/logger/logger.service';
import { DisplayService } from 'src/app/core/utils/device/display.service';

@Component({
  selector: 'horizontal-scroller',
  templateUrl: './horizontal-scroller.component.html',
  styleUrls: ['./horizontal-scroller.component.scss']
})
export class HorizontalScrollerComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @Input('title')
  private _title: string;

  @Input('subTitle')
  private _subTitle: string;

  @Input('color')
  private _color: string = 'dark';

  @Input('displayScrollbar')
  private _displayScrollbar: boolean = true;

  @Input('scrollStep')
  private _scrollStep: number = 200;

  @ViewChild('wrapper')
  private _wrapperElemt: ElementRef;

  private _logger: LoggerService;

  private _displayButtonLeft: boolean = false;
  private _displayButtonRight: boolean = false;

  private _maxScroll: number = 0;

  constructor(
    private _cdRef: ChangeDetectorRef,
    private _displayService: DisplayService
    ) {
    this._logger = LoggerService.build(HorizontalScrollerComponent.name);
  }

  ngOnInit(): void {
    this._logger.debug('Creating horizontal-scroller: ' + this._title);
  }

  ngAfterViewInit(): void {
    this._wrapperElemt.nativeElement.addEventListener('scroll', () => this.updateButtonDisplay());
  }

  ngAfterViewChecked(): void {
    this.updateButtonDisplay();
    this._cdRef.detectChanges();
  }

  public scrollLeft() {
    this._wrapperElemt.nativeElement.scrollLeft -= this._scrollStep;
  }

  public scrollRight() {
    this._wrapperElemt.nativeElement.scrollLeft += this._scrollStep;
  }

  public updateButtonDisplay() {
    this.updateButtonDisplayLeft();
    this.updateButtonDisplayRight();
  }

  public updateButtonDisplayLeft() {
    this._displayButtonLeft = this._wrapperElemt.nativeElement.scrollLeft > 0;
  }

  public updateButtonDisplayRight() {
    let maxScroll = this._wrapperElemt.nativeElement.scrollWidth - this._wrapperElemt.nativeElement.clientWidth;
    this._displayButtonRight = this._wrapperElemt.nativeElement.scrollLeft < maxScroll;
  }

  public isMobile(): boolean {
    return this._displayService.isMobile;
  }

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter subTitle
     * @return {string}
     */
	public get subTitle(): string {
		return this._subTitle;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter subTitle
     * @param {string} value
     */
	public set subTitle(value: string) {
		this._subTitle = value;
	}

    /**
     * Getter logger
     * @return {LoggerService}
     */
	public get logger(): LoggerService {
		return this._logger;
	}

    /**
     * Setter logger
     * @param {LoggerService} value
     */
	public set logger(value: LoggerService) {
		this._logger = value;
	}

    /**
     * Getter color
     * @return {string }
     */
	public get color(): string  {
		return this._color;
	}

    /**
     * Setter color
     * @param {string } value
     */
	public set color(value: string ) {
		this._color = value;
	}

    /**
     * Getter displayScrollbar
     * @return {boolean }
     */
	public get displayScrollbar(): boolean  {
		return this._displayScrollbar;
	}

    /**
     * Setter displayScrollbar
     * @param {boolean } value
     */
	public set displayScrollbar(value: boolean ) {
		this._displayScrollbar = value;
	}

    /**
     * Getter wrapperElemt
     * @return {ElementRef<any>}
     */
	public get wrapperElemt(): ElementRef<any> {
		return this._wrapperElemt;
	}

    /**
     * Setter wrapperElemt
     * @param {ElementRef<any>} value
     */
	public set wrapperElemt(value: ElementRef<any>) {
		this._wrapperElemt = value;
	}

    /**
     * Getter scrollStep
     * @return {number }
     */
	public get scrollStep(): number  {
		return this._scrollStep;
	}

    /**
     * Setter scrollStep
     * @param {number } value
     */
	public set scrollStep(value: number ) {
		this._scrollStep = value;
	}

    /**
     * Getter displayButtonLeft
     * @return {boolean }
     */
	public get displayButtonLeft(): boolean  {
		return this._displayButtonLeft;
	}

    /**
     * Getter displayButtonRight
     * @return {boolean }
     */
	public get displayButtonRight(): boolean  {
		return this._displayButtonRight;
	}

    /**
     * Setter displayButtonLeft
     * @param {boolean } value
     */
	public set displayButtonLeft(value: boolean ) {
		this._displayButtonLeft = value;
	}

    /**
     * Setter displayButtonRight
     * @param {boolean } value
     */
	public set displayButtonRight(value: boolean ) {
		this._displayButtonRight = value;
	}

    /**
     * Getter maxScroll
     * @return {number }
     */
	public get maxScroll(): number  {
		return this._maxScroll;
	}

    /**
     * Setter maxScroll
     * @param {number } value
     */
	public set maxScroll(value: number ) {
		this._maxScroll = value;
	}

}
