import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectComponent } from './dashboard-project.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { ShrinkPipe } from 'src/app/shared/pipes/Shrink/shrink.pipe';
import { NumberFormatPipe } from 'src/app/shared/pipes/NumberFormat/number-format.pipe';

describe('DashboardProjectComponent', () => {
  let component: DashboardProjectComponent;
  let fixture: ComponentFixture<DashboardProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProjectComponent, ShrinkPipe, NumberFormatPipe ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
