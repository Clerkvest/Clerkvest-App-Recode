import { ThrottleDirective } from './throttle.directive';
import { Component, DebugElement, EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input #button_throttle type="email" required [throttle]="1000">'
})
class TestThrottleDirectiveComponent {}

describe('ThrottleDirective', () => {

  let component: TestThrottleDirectiveComponent;
  let directive: ThrottleDirective;
  let fixture: ComponentFixture<TestThrottleDirectiveComponent>;
  let inputEl: DebugElement;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestThrottleDirectiveComponent, ThrottleDirective]
    });
    fixture = TestBed.createComponent(TestThrottleDirectiveComponent);
    component = fixture.componentInstance;
    directive = new ThrottleDirective();
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  afterEach(() => {
    fixture = null;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should create logger', () => {
    expect(directive.logger).toBeTruthy();
  });

  it('should trigger onKeyUp on keyup event', () => {
    spy = spyOn(ThrottleDirective.prototype, 'onKeyUp');
    inputEl.triggerEventHandler('keyup', null);

    expect(directive.onKeyUp).toHaveBeenCalled();
  });

  it('should trigger onClick on click event', () => {
    spy = spyOn(ThrottleDirective.prototype, 'onClick');
    inputEl.triggerEventHandler('click', null);

    expect(directive.onClick).toHaveBeenCalled();
  });

});
