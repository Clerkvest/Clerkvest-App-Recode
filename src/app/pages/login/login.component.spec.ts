import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should set state to LoginComponent.STATE_SEND', () => {
    component.emailSend();
    expect(component.state).toBe(LoginComponent.STATE_SENT);
  });

  it('should set state to LoginComponent.STATE_SEND', () => {
    component.authManually();
    expect(component.state).toBe(LoginComponent.STATE_MANUALLY);
  });

  it('should set state to LoginComponent.STATE_SEND', () => {
    component.openLanguageSelector();
    expect(component.state).toBe(LoginComponent.STATE_LANG_SELECTOR);
  });

  it('should set state to LoginComponent.STATE_SEND', () => {
    component.emailSend();
    expect(component.state).toBe(LoginComponent.STATE_SENT);
    component.openLanguageSelector();
    expect(component.state).toBe(LoginComponent.STATE_LANG_SELECTOR);
    component.closeLanguageSelector();
    expect(component.state).toBe(LoginComponent.STATE_SENT);

    component.authManually();
    expect(component.state).toBe(LoginComponent.STATE_MANUALLY);
    component.openLanguageSelector();
    expect(component.state).toBe(LoginComponent.STATE_LANG_SELECTOR);
    component.closeLanguageSelector();
    expect(component.state).toBe(LoginComponent.STATE_MANUALLY);
  });
});
