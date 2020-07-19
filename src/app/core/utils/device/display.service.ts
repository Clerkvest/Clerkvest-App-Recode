import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private _logger: LoggerService = LoggerService.build(DisplayService.name);

  public static readonly BREAKPOINT_MOBILE: number = 768;
  public static readonly BREAKPOINT_TABLET: number = 992;

  private _isMobile: boolean = false;

  private _height: Number;
  private _width: Number;

  constructor() { }

  public onResize() {
    this._width = window.innerWidth;

    if(this._width <= DisplayService.BREAKPOINT_MOBILE) {
      this._isMobile = true;
    } else {
      this._isMobile = false;
    }
  }

    /**
     * Getter logger
     * @return {LoggerService }
     */
	public get logger(): LoggerService  {
		return this._logger;
	}

    /**
     * Getter isMobile
     * @return {boolean }
     */
	public get isMobile(): boolean  {
		return this._isMobile;
	}

    /**
     * Getter height
     * @return {Number}
     */
	public get height(): Number {
		return this._height;
	}

    /**
     * Getter width
     * @return {Number}
     */
	public get width(): Number {
		return this._width;
	}

    /**
     * Setter logger
     * @param {LoggerService } value
     */
	public set logger(value: LoggerService ) {
		this._logger = value;
	}

    /**
     * Setter isMobile
     * @param {boolean } value
     */
	public set isMobile(value: boolean ) {
		this._isMobile = value;
	}

    /**
     * Setter height
     * @param {Number} value
     */
	public set height(value: Number) {
		this._height = value;
	}

    /**
     * Setter width
     * @param {Number} value
     */
	public set width(value: Number) {
		this._width = value;
	}

}
