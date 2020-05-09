import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should get container child element', () => {
    expect(component.containerElemt).toBeDefined();
  });

  it('should display modal', () => {
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.HIDE)).toBeTrue();
    component.display();
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.SHOW)).toBeTrue();
  });

  it('should hide modal', () => {
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.HIDE)).toBeTrue();
    component.display();
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.SHOW)).toBeTrue();
    component.hide();
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(ModalComponent.HIDE)).toBeTrue();
  });
});
