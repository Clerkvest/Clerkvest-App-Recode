import { AuditDirective } from './audit.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<input #input type="email" required [audit]="1000">'
})
class TestAuditDirectiveComponent {}

describe('AuditDirective', () => {

  let component: TestAuditDirectiveComponent;
  let directive: AuditDirective;
  let fixture: ComponentFixture<TestAuditDirectiveComponent>;
  let inputEl: DebugElement;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAuditDirectiveComponent, AuditDirective]
    });
    fixture = TestBed.createComponent(TestAuditDirectiveComponent);
    component = fixture.componentInstance;
    directive = new AuditDirective();
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
    spy = spyOn(AuditDirective.prototype, 'onKeyUp');
    inputEl.triggerEventHandler('keyup', null);

    expect(directive.onKeyUp).toHaveBeenCalled();
  });

  it('should trigger onClick on click event', () => {
    spy = spyOn(AuditDirective.prototype, 'onClick');
    inputEl.triggerEventHandler('click', null);

    expect(directive.onClick).toHaveBeenCalled();
  });

});
