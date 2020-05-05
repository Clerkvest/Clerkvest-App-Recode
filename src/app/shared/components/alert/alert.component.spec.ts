import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should be able to get child elements', () => {
    expect(component.containerElemt).toBeDefined();
    expect(component.titleElemt).toBeDefined();
    expect(component.textElemt).toBeDefined();
  });

  it('should set success class', () => {
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SUCCESS)).toBeFalse();
    component.success('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SUCCESS)).toBeTrue();
  });

  it('should set info class', () => {
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.INFO)).toBeFalse();
    component.info('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.INFO)).toBeTrue();
  });

  it('should set error class', () => {
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.ERROR)).toBeFalse();
    component.error('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.ERROR)).toBeTrue();
  });

  it('should set show class on success call', () => {
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.HIDE)).toBeTrue();
    component.success('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SHOW)).toBeTrue();
  });

  it('should set show class on info call', () => {
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.HIDE)).toBeTrue();
    component.info('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SHOW)).toBeTrue();
  });

  it('should set show class on error call', () => {
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.HIDE)).toBeTrue();
    component.error('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(AlertComponent.SHOW)).toBeTrue();
  });

  it('should set title on success call', () => {
    expect(component.titleElemt.nativeElement.innerHTML).toBe('Title');
    component.success('Changed_Title', 'Changed_Text');
    expect(component.titleElemt.nativeElement.innerHTML).toBe('Changed_Title');
  });

  it('should set text on success call', () => {
    expect(component.textElemt.nativeElement.innerHTML).toBe('Text');
    component.success('Changed_Title', 'Changed_Text');
    expect(component.textElemt.nativeElement.innerHTML).toBe('Changed_Text');
  });

  it('should set image on success call', () => {
    component.success('Changed_Title', 'Changed_Text');
    expect(component.imageElemt.nativeElement.classList.contains(AlertComponent.FA)).toBeTrue();
    expect(component.imageElemt.nativeElement.classList.contains(AlertComponent.CHECK_IMAGE)).toBeTrue();
  });

  it('should set title on info call', () => {
    expect(component.titleElemt.nativeElement.innerHTML).toBe('Title');
    component.info('Changed_Title', 'Changed_Text');
    expect(component.titleElemt.nativeElement.innerHTML).toBe('Changed_Title');
  });

  it('should set text on info call', () => {
    expect(component.textElemt.nativeElement.innerHTML).toBe('Text');
    component.info('Changed_Title', 'Changed_Text');
    expect(component.textElemt.nativeElement.innerHTML).toBe('Changed_Text');
  });

  it('should set image on info call', () => {
    component.info('Changed_Title', 'Changed_Text');
    expect(component.imageElemt.nativeElement.classList.contains(AlertComponent.FA)).toBeTrue();
    expect(component.imageElemt.nativeElement.classList.contains(AlertComponent.INFO_IMAGE)).toBeTrue();
  });

  it('should set title on error call', () => {
    expect(component.titleElemt.nativeElement.innerHTML).toBe('Title');
    component.error('Changed_Title', 'Changed_Text');
    expect(component.titleElemt.nativeElement.innerHTML).toBe('Changed_Title');
  });

  it('should set text on error call', () => {
    expect(component.textElemt.nativeElement.innerHTML).toBe('Text');
    component.error('Changed_Title', 'Changed_Text');
    expect(component.textElemt.nativeElement.innerHTML).toBe('Changed_Text');
  });

  it('should set image on error call', () => {
    component.error('Changed_Title', 'Changed_Text');
    expect(component.imageElemt.nativeElement.classList.contains(AlertComponent.FA)).toBeTrue();
    expect(component.imageElemt.nativeElement.classList.contains(AlertComponent.TIMES_IMAGE)).toBeTrue();
  });
});
