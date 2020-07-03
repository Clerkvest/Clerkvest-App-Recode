import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLanguageSelectorComponent } from './login-language-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { Router } from '@angular/router';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';
import { Cookies } from 'src/app/core/utils/cookie/cookie';
import { Language } from 'src/app/core/utils/localization/language.enum';
import { By } from '@angular/platform-browser';

describe('LoginLanguageSelectorComponent', () => {
  let component: LoginLanguageSelectorComponent;
  let fixture: ComponentFixture<LoginLanguageSelectorComponent>;
  let cookiesService: CookieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLanguageSelectorComponent ],
      imports: [HttpClientModule],
      providers: [LocalizationService, CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLanguageSelectorComponent);
    cookiesService = TestBed.inject(CookieService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should change language to DE', () => {
    component.chooseDE();
    expect(cookiesService.get(Cookies.LANGUAGE)).toBe(Language.DE)
  });

  it('should change language to DE', () => {
    component.chooseEN();
    expect(cookiesService.get(Cookies.LANGUAGE)).toBe(Language.EN)
  });

  it('should emit event on function calls', () => {
    let spy = spyOn(component.languageChanged, 'emit');

    component.chooseDE();
    component.chooseEN();

    expect(component.languageChanged.emit).toHaveBeenCalledTimes(2);
  });

  it('should call chooseDE on button click', () => {
    let spy = spyOn(component, 'chooseDE');

    fixture.debugElement.query(By.css('#buttonChooseDE')).triggerEventHandler('click', null);
    expect(component.chooseDE).toHaveBeenCalled();
  });

  it('should call chooseEN on button click', () => {
    let spy = spyOn(component, 'chooseEN');

    fixture.debugElement.query(By.css('#buttonChooseEN')).triggerEventHandler('click', null);
    expect(component.chooseEN).toHaveBeenCalled();
  });
});
