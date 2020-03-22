import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isNullOrUndefined } from 'util';
import { LoggerService } from '../logger/logger.service';
import { Cookie } from './cookie';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  public static readonly DATE_HOURS = 24;
  public static readonly DATE_MIN = 60;
  public static readonly DATE_SEC = 60;
  public static readonly DATE_MIL = 1000;

  public static readonly DATE_OFFSET = CookieService.DATE_HOURS * CookieService.DATE_MIN * CookieService.DATE_SEC * CookieService.DATE_MIL;

  public logger: LoggerService = LoggerService.build(CookieService.name);

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public set(key: string, value: string, expires?: number, path?: string, domain?: string, secure?: boolean) {
    let cookie: Cookie = new Cookie();

    cookie.key = key;
    cookie.value = value;
    cookie.expires = this.getDateUTC(expires);
    cookie.path = path;
    cookie.domain = domain;
    cookie.secure = secure;

    this.logger.debug('Setting cookie: ' + cookie.toString());
    this.document.cookie = cookie.toString();
  }

  public get(key: string): string {
    this.logger.debug('Getting cookie: ' + key);

    let cookies = this.document.cookie.split('; ');

    for(let i = 0; i < cookies.length; i++) {
      let keyValue = cookies[i].split('=');
      if(keyValue.length === 2 && keyValue[0] === key) {
        return keyValue[1];
      }
    }

    return undefined;
  }

  public getAsBoolean(key: string): boolean {
    let cookieValue = this.get(key);
    if (isNullOrUndefined(cookieValue)) {
      return undefined;
    }

    return cookieValue === 'true' || cookieValue === '1';
  }

  public getAsInt(key: string): number {
    let cookieValue = this.get(key);
    if (isNullOrUndefined(cookieValue)) {
      return undefined;
    }

    return Number.parseInt(cookieValue);
  }

  public getAsFloat(key: string): number {
    let cookieValue = this.get(key);
    if (isNullOrUndefined(cookieValue)) {
      return undefined;
    }

    return Number.parseFloat(cookieValue);
  }

  public check(key: string): boolean {
    let cookieValue = this.get(key);
    if (isNullOrUndefined(cookieValue)) {
      return false;
    }

    return true;
  }

  public delete(key: string, path?: string, domain?: string, secure?: boolean) {
    let cookie: Cookie = new Cookie();

    cookie.key = key;
    cookie.value = '';
    cookie.expires = 'Thu, 01 Jan 1970 00:00:00 UTC';
    cookie.path = path;
    cookie.domain = domain;
    cookie.secure = secure;

    this.logger.debug('Deleting cookie: ' + cookie.toString());
    this.document.cookie = cookie.toString();
  }

  private getDateUTC(expires: number): string {
    if(!isNullOrUndefined(expires)) {
      let date = new Date();
      date.setTime(date.getTime() + (expires * CookieService.DATE_OFFSET));
      return date.toUTCString();
    } else {
      return undefined;
    }
  }
}
