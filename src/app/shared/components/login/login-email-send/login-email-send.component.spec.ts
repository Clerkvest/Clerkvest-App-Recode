import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmailSendComponent } from './login-email-send.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalizationService } from 'src/app/core/utils/localization/localization.service';
import { By } from '@angular/platform-browser';

describe('LoginEmailSendComponent', () => {
  let component: LoginEmailSendComponent;
  let fixture: ComponentFixture<LoginEmailSendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEmailSendComponent ],
      imports: [HttpClientModule],
      providers: [LocalizationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEmailSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should emit event on function calls', () => {
    let spy = spyOn(component.authManually, 'emit');

    component.enterManually();

    expect(component.authManually.emit).toHaveBeenCalled();
  });

  it('should call enterManually on button click', () => {
    let spy = spyOn(component, 'enterManually');

    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    expect(component.enterManually).toHaveBeenCalled();
  });
});
