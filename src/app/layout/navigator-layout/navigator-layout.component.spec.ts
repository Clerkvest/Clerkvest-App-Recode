import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorLayoutComponent } from './navigator-layout.component';

describe('NavigatorLayoutComponent', () => {
  let component: NavigatorLayoutComponent;
  let fixture: ComponentFixture<NavigatorLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
