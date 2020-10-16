import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashbordMaterialProjectComponent} from './dashbord-material-project.component';

describe('DashbordMaterialProjectComponent', () => {
  let component: DashbordMaterialProjectComponent;
  let fixture: ComponentFixture<DashbordMaterialProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashbordMaterialProjectComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordMaterialProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
