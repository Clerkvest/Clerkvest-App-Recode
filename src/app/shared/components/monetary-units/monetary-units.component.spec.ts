import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetaryUnitsComponent } from './monetary-units.component';
import { By } from '@angular/platform-browser';
import { NumberFormatPipe } from '../../pipes/NumberFormat/number-format.pipe';

describe('MonetaryUnitsComponent', () => {
  let component: MonetaryUnitsComponent;
  let fixture: ComponentFixture<MonetaryUnitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonetaryUnitsComponent, NumberFormatPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonetaryUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display unit icon', () => {
    expect(fixture.debugElement.query(By.css('i'))).toBeTruthy();
  });

  it('should display decimal value', () => {
    component.value = 1.00;
    fixture.detectChanges();
    let deEl = fixture.debugElement.query(By.css('span'));
    expect(deEl.nativeElement.innerHTML.includes('1,00')).toBeTrue();
  });
});
