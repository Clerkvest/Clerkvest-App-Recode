import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuthManuallyComponent } from './login-auth-manually.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginAuthManuallyComponent', () => {
  let component: LoginAuthManuallyComponent;
  let fixture: ComponentFixture<LoginAuthManuallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthManuallyComponent ],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [LocalizationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuthManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should have a defined textfield element', () => {
    expect(component.textfieldAuthElemt).toBeDefined();
  });

  it('should call sendEmail on button click', () => {
    let spy = spyOn(component, 'auth');

    fixture.debugElement.query(By.css('button')).triggerEventHandler('onThrottle', null);
    expect(component.auth).toHaveBeenCalled();
  });

  it('should have a email validity', () => {
    component.textfieldAuthElemt.nativeElement.value = '';
    component.setAuthValidity();
    expect(component.authValidity.isDirty()).toBeTrue();
    expect(component.authValidity.isFalse()).toBeTrue();
    component.authValidity.reset();

    component.textfieldAuthElemt.nativeElement.value = '48d47848-554b-4ed4-b45b-759d2514efba';
    component.setAuthValidity();
    expect(component.authValidity.isDirty()).toBeTrue();
    expect(component.authValidity.isTrue()).toBeTrue();
    component.authValidity.reset();
  });

  it('should warn user if input is unvalid on function call', () => {
    let spy = spyOn(component.logger, 'warn');
    component.textfieldAuthElemt.nativeElement.value = '';

    component.auth();

    expect(component.logger.warn).toHaveBeenCalled();
  });

  it('should check validity on function call', () => {
    let spy = spyOn(component, 'setAuthValidity')
    component.textfieldAuthElemt.nativeElement.value = '48d47848-554b-4ed4-b45b-759d2514efba'
    component.auth();

    expect(component.setAuthValidity).toHaveBeenCalled();
  });
});
