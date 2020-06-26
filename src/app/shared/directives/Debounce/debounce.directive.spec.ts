import { DebounceDirective } from './debounce.directive';
import { Component, DebugElement, EventEmitter } from '@angular/core';
import { TestBed, ComponentFixture, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input #textfield_email type="email" required [debounce]="1000">'
})
class TestDebounceDirectiveComponent {}

describe('DebounceDirective', () => {

  let component: TestDebounceDirectiveComponent;
  let directive: DebounceDirective;
  let fixture: ComponentFixture<TestDebounceDirectiveComponent>;
  let inputEl: DebugElement;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDebounceDirectiveComponent, DebounceDirective]
    });
    fixture = TestBed.createComponent(TestDebounceDirectiveComponent);
    component = fixture.componentInstance;
    directive = new DebounceDirective();
    inputEl = fixture.debugElement.query(By.css('input'));

    jasmine.clock().install();
  });

  afterEach(() => {
    fixture = null;
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should create logger', () => {
    expect(directive.logger).toBeTruthy();
  });

  it('should trigger event on keyup event', () => {
    spy = spyOn(DebounceDirective.prototype, 'onKeyUp');
    inputEl.triggerEventHandler('keyup', null);

    expect(directive.onKeyUp).toHaveBeenCalled();
  });

  it('should trigger event on keyup event', () => {
    spy = spyOn(DebounceDirective.prototype, 'onClick');
    inputEl.triggerEventHandler('click', null);

    expect(directive.onClick).toHaveBeenCalled();
  });

  it('should debounce event for 300ms', fakeAsync(() => {
    spy = spyOn(EventEmitter.prototype, 'emit');
    inputEl.triggerEventHandler('click', null);

    tick(301);
    fixture.detectChanges();

    expect(directive.onDebounce.emit).toHaveBeenCalled();
  }));
});
