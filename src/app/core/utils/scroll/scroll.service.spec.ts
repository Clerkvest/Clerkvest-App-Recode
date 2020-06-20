import { TestBed } from '@angular/core/testing';

import { ScrollService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should define threshold', () => {
    expect(ScrollService.THRESHOLD).toBe(200);
  });

  it('should get isAtTop state', () => {
    expect(service.getIsAtTop()).toBeTrue();
  });

  it('should be able to set window scrollY', () => {
    spyOnProperty(window, 'scrollY').and.returnValue(199);
    window.dispatchEvent(new Event('scroll'));
    expect(window.scrollY).toBe(199);
  });

  it('should set isAtTop to true when under threshhold', () => {
    spyOnProperty(window, 'scrollY').and.returnValue(ScrollService.THRESHOLD - 1);
    window.dispatchEvent(new Event('scroll'));
    expect(window.scrollY).toBe(ScrollService.THRESHOLD - 1);
    service.onScroll();
    expect(service.getIsAtTop()).toBeTrue();
  });

  it('should set isAtTop to false when over threshhold', () => {
    spyOnProperty(window, 'scrollY').and.returnValue(ScrollService.THRESHOLD);
    window.dispatchEvent(new Event('scroll'));
    expect(window.scrollY).toBe(ScrollService.THRESHOLD);
    service.onScroll();
    expect(service.getIsAtTop()).toBeFalse();
  });
});
