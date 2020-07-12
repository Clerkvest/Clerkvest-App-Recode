import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorMobileComponent } from './navigator-mobile.component';

describe('NavigatorMobileComponent', () => {
  let component: NavigatorMobileComponent;
  let fixture: ComponentFixture<NavigatorMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
