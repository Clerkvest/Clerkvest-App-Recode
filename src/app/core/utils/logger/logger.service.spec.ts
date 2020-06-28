import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
    spyOn(window.console, 'warn');
    spyOn(window.console, 'log');
    spyOn(window.console, 'error');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should print everything from TRACE', () => {
    service.updateSettings(false, false, LoggerService.TRACE, false);

    service.trace(LoggerService.TRACE);
    service.debug(LoggerService.DEBUG);
    service.info(LoggerService.INFO);
    service.warn(LoggerService.WARN);
    service.error(LoggerService.ERROR);
    service.fatal(LoggerService.FATAL);

    expect(window.console.error).toHaveBeenCalledWith('"' + LoggerService.TRACE + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.DEBUG + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.INFO + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.WARN + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.ERROR + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.FATAL + '"');
  });

  it('should print everything from DEBUG', () => {
    service.updateSettings(false, false, LoggerService.DEBUG, false);

    service.trace(LoggerService.TRACE);
    service.debug(LoggerService.DEBUG);
    service.info(LoggerService.INFO);
    service.warn(LoggerService.WARN);
    service.error(LoggerService.ERROR);
    service.fatal(LoggerService.FATAL);

    expect(window.console.error).not.toHaveBeenCalled();
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.DEBUG + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.INFO + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.WARN + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.ERROR + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.FATAL + '"');
  });

  it('should print everything from INFO', () => {
    service.updateSettings(false, false, LoggerService.INFO, false);

    service.trace(LoggerService.TRACE);
    service.debug(LoggerService.DEBUG);
    service.info(LoggerService.INFO);
    service.warn(LoggerService.WARN);
    service.error(LoggerService.ERROR);
    service.fatal(LoggerService.FATAL);

    expect(window.console.error).not.toHaveBeenCalled();
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.DEBUG + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.INFO + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.WARN + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.ERROR + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.FATAL + '"');
  });

  it('should print everything from WARN', () => {
    service.updateSettings(false, false, LoggerService.WARN, false);

    service.trace(LoggerService.TRACE);
    service.debug(LoggerService.DEBUG);
    service.info(LoggerService.INFO);
    service.warn(LoggerService.WARN);
    service.error(LoggerService.ERROR);
    service.fatal(LoggerService.FATAL);

    expect(window.console.error).not.toHaveBeenCalled();
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.DEBUG + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.INFO + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.WARN + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.ERROR + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.FATAL + '"');
  });

  it('should print everything from ERROR', () => {
    service.updateSettings(false, false, LoggerService.ERROR, false);

    service.trace(LoggerService.TRACE);
    service.debug(LoggerService.DEBUG);
    service.info(LoggerService.INFO);
    service.warn(LoggerService.WARN);
    service.error(LoggerService.ERROR);
    service.fatal(LoggerService.FATAL);

    expect(window.console.error).not.toHaveBeenCalled();
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.DEBUG + '"');
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.INFO + '"');
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.WARN + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.ERROR + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.FATAL + '"');
  });

  it('should print everything from FATAL', () => {
    service.updateSettings(false, false, LoggerService.FATAL, false);

    service.trace(LoggerService.TRACE);
    service.debug(LoggerService.DEBUG);
    service.info(LoggerService.INFO);
    service.warn(LoggerService.WARN);
    service.error(LoggerService.ERROR);
    service.fatal(LoggerService.FATAL);

    expect(window.console.error).not.toHaveBeenCalled();
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.DEBUG + '"');
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.INFO + '"');
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.WARN + '"');
    expect(window.console.log).not.toHaveBeenCalledWith('"' + LoggerService.ERROR + '"');
    expect(window.console.log).toHaveBeenCalledWith('"' + LoggerService.FATAL + '"');
  });
});
