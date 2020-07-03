import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmailInputComponent } from './login-email-input.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { Cookies, CookieTime } from 'src/app/core/utils/cookie/cookie';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { Language } from 'src/app/core/utils/localization/language.enum';
import { By } from '@angular/platform-browser';

describe('LoginEmailInputComponent', () => {
  let component: LoginEmailInputComponent;
  let fixture: ComponentFixture<LoginEmailInputComponent>;
  let cookieService: CookieService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEmailInputComponent ],
      imports: [HttpClientModule],
      providers: [LocalizationService, CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmailInputComponent);
    cookieService = TestBed.inject(CookieService);
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
    expect(component.textfieldEmailElemt).toBeDefined();
  });

  it('should have a defined checkbox element', () => {
    expect(component.checkboxSaveElemt).toBeDefined();
  });

  it('should call sendEmail on button click', () => {
    let spy = spyOn(component, 'sendEmail');

    fixture.debugElement.query(By.css('#buttonSend')).triggerEventHandler('onThrottle', null);
    expect(component.sendEmail).toHaveBeenCalled();
  });

  it('should have a email validity', () => {
    component.textfieldEmailElemt.nativeElement.value = '';
    component.setEmailValidity();
    expect(component.emailValidity.isDirty()).toBeTrue();
    expect(component.emailValidity.isFalse()).toBeTrue();
    component.emailValidity.reset();

    component.textfieldEmailElemt.nativeElement.value = 'Test123';
    component.setEmailValidity();
    expect(component.emailValidity.isDirty()).toBeTrue();
    expect(component.emailValidity.isFalse()).toBeTrue();
    component.emailValidity.reset();

    component.textfieldEmailElemt.nativeElement.value = 'Test123@test.com';
    component.setEmailValidity();
    expect(component.emailValidity.isDirty()).toBeTrue();
    expect(component.emailValidity.isTrue()).toBeTrue();
    component.emailValidity.reset();
  });

  it('should warn user if input is unvalid on button click', () => {
    let spy = spyOn(component.logger, 'warn');

    component.textfieldEmailElemt.nativeElement.value = '';
    component.setEmailValidity();
    expect(component.emailValidity.isDirty()).toBeTrue();
    expect(component.emailValidity.isFalse()).toBeTrue();
    component.emailValidity.reset();

    component.sendEmail();

    expect(component.logger.warn).toHaveBeenCalled();
  });

  it('should check validity on function call', () => {
    let spy = spyOn(component, 'setEmailValidity')
    component.textfieldEmailElemt.nativeElement.value = 'Test123@test.com'
    component.sendEmail();

    expect(component.setEmailValidity).toHaveBeenCalled();
  });

  it('should save user infomation if checkbox is checked', () => {
    component.textfieldEmailElemt.nativeElement.value = 'Test123@test.com'
    component.checkboxSaveElemt.nativeElement.checked = true;
    component.sendEmail();

    expect(cookieService.get(Cookies.STORED_LOGIN)).toBe('Test123@test.com');
  });

  it('should delete user infomation if checkbox is unchecked', () => {
    cookieService.set(Cookies.STORED_LOGIN, 'Test123@test.com', CookieTime.YEAR);
    expect(cookieService.get(Cookies.STORED_LOGIN)).toBe('Test123@test.com');

    component.textfieldEmailElemt.nativeElement.value = 'Test123@test.com';
    component.checkboxSaveElemt.nativeElement.checked = false;
    component.sendEmail();

    expect(cookieService.check(Cookies.STORED_LOGIN)).toBeFalse();
  });
});
