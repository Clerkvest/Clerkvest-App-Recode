import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalComponent } from './success-modal.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModalComponent } from '../modal.component';
import { By } from '@angular/platform-browser';

describe('SuccessModalComponent', () => {
  let component: SuccessModalComponent;
  let fixture: ComponentFixture<SuccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessModalComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should get modal child element', () => {
    expect(component.modal).toBeTruthy();
  });

  it('should have default values', () => {
    const button = fixture.debugElement.query(By.css('#button'));
    const text = fixture.debugElement.query(By.css('.text'));
    expect(button.nativeElement.innerHTML).toContain(component.btnLabel);
    expect(text.nativeElement.innerHTML).toContain(component.text);
  });

  it('should set values', () => {
    component.btnLabel = 'Test1';
    component.text = 'Test2';

    fixture.detectChanges();

    const buttonTest = fixture.debugElement.query(By.css('#button'));
    const textTest = fixture.debugElement.query(By.css('.text'));
    expect(buttonTest.nativeElement.innerHTML).toContain(component.btnLabel);
    expect(textTest.nativeElement.innerHTML).toContain(component.text);
  });
});
