import { TestBed } from '@angular/core/testing';

import { DisplayService } from './display.service';

describe('DisplayService', () => {
  let service: DisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should define breakpoints', () => {
    expect(DisplayService.BREAKPOINT_MOBILE).toBe(768);
    expect(DisplayService.BREAKPOINT_TABLET).toBe(992);
  });

  it('should get mobile state', () => {
    expect(service.isMobile).toBeFalse();
  });

  it('should be able to set window inner width', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(DisplayService.BREAKPOINT_MOBILE);
    window.dispatchEvent(new Event('resize'));
    expect(window.innerWidth).toBe(DisplayService.BREAKPOINT_MOBILE);
  });

  it('should get set mobile to true on small devices', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(DisplayService.BREAKPOINT_MOBILE);
    window.dispatchEvent(new Event('resize'));
    expect(window.innerWidth).toBe(DisplayService.BREAKPOINT_MOBILE);
    service.onResize();
    expect(service.isMobile).toBeTrue();
  });

  it('should get set mobile to false on large devices', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(DisplayService.BREAKPOINT_MOBILE + 1);
    window.dispatchEvent(new Event('resize'));
    expect(window.innerWidth).toBe(DisplayService.BREAKPOINT_MOBILE + 1);
    service.onResize();
    expect(service.isMobile).toBeFalse();
  });
});
