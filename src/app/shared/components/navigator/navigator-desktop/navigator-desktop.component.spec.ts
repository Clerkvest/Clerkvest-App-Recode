import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorDesktopComponent } from './navigator-desktop.component';

describe('NavigatorDesktopComponent', () => {
  let component: NavigatorDesktopComponent;
  let fixture: ComponentFixture<NavigatorDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
