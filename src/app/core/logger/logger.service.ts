import { environment } from './../../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  public static readonly TRACE: string = 'TRACE';
  public static readonly DEBUG: string = 'DEBUG';
  public static readonly INFO: string  = 'INFO ';
  public static readonly WARN: string  = 'WARN ';
  public static readonly ERROR: string = 'ERROR';
  public static readonly FATAL: string = 'FATAL';

  private logTimestamp = true;
  private logType = true;
  private logLevel = 3;

  // Trace = 5; 
  // Debug = 4;
  // Info = 3;
  // Warn = 2;
  // Error = 1;
  // Fatal = 0;

  constructor() {
    this.initSettings();
  }

  public updateSettings(logTimestamp: boolean, logType: boolean, logLevel: string) {
    environment.logTimestamp = logTimestamp;
    environment.logType = logType;
    environment.logLevel = logLevel;

    this.initSettings();
  }

  private initSettings() {
    this.initTimestamp();
    this.initType();
    this.initLevel();
  }

  private initTimestamp() {
    if (!isNullOrUndefined(environment.logTimestamp)) {
      this.logTimestamp = environment.logTimestamp;
    }
  }

  private initType() {
    if (!isNullOrUndefined(environment.logType)) {
      this.logType = environment.logType;
    }
  }

  private initLevel() {
    switch(environment.logLevel.toLowerCase()) {
      case 'fatal' : {
        this.logLevel = 0;
        break;
      }
      case 'error' : {
        this.logLevel = 1;
        break;
      }
      case 'warn' : {
        this.logLevel = 2;
        break;
      }
      case 'info' : {
        this.logLevel = 3;
        break;
      }
      case 'debug' : {
        this.logLevel = 4;
        break;
      }
      case 'trace' : {
        this.logLevel = 5;
        break;
      }
      default : {
        this.logLevel = 3;
        break;
      }
    }
  }

  private prependTime(msg: string): string {
    if(this.logTimestamp) {
      let now = new Date();

      let date = 
        now.getDate() + '.' + 
        (now.getMonth() + 1) + '.' + 
        now.getFullYear() + ' ' + 
        now.getHours() + ':' + 
        now.getMinutes() + ':' + 
        now.getSeconds();

      return date + '\t' + msg;
    } 

    return msg;
  }

  private prependType (msg: string, type: string): string {
    if(this.logType) {
      return type.toUpperCase() + '\t' + msg;
    }

    return msg;
  }

  public fatal(object: any) {
    if(this.logLevel >= 0) {
      let msg: string = JSON.stringify(object);
      msg = this.prependType(msg, LoggerService.FATAL);
      msg = this.prependTime(msg);
      console.log(msg);
    }
  }

  public error(object: any) {
    if(this.logLevel >= 1) {
      let msg: string = JSON.stringify(object);
      msg = this.prependType(msg, LoggerService.ERROR);
      msg = this.prependTime(msg);
      console.log(msg);
    }
  }

  public warn(object: any) {
    if(this.logLevel >= 2) {
      let msg: string = JSON.stringify(object);
      msg = this.prependType(msg, LoggerService.WARN);
      msg = this.prependTime(msg);
      console.warn(msg);
    }
  }

  public info(object: any) {
    if(this.logLevel >= 3) {
      let msg: string = JSON.stringify(object);
      msg = this.prependType(msg, LoggerService.INFO);
      msg = this.prependTime(msg);
      console.log(msg);
    }
  }

  public debug(object: any) {
    if(this.logLevel >= 4) {
      let msg: string = JSON.stringify(object);
      msg = this.prependType(msg, LoggerService.DEBUG);
      msg = this.prependTime(msg);
      console.log(msg);
    }
  }

  public trace(object: any) {
    if(this.logLevel >= 5) {
      let msg: string = JSON.stringify(object);
      msg = this.prependType(msg, LoggerService.TRACE);
      msg = this.prependTime(msg);
      console.error(msg);
    }
  }
}
