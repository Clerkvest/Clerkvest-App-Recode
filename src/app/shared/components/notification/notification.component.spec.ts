import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationComponent } from './notification.component';

describe('NotificationComponent', () => {
  let component: NotificationComponent;
  let fixture: ComponentFixture<NotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationComponent);
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
    expect(component.timeElemt).toBeDefined();
    expect(component.textElemt).toBeDefined();
  });

  it('should set success class', () => {
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SUCCESS)).toBeFalse();
    component.success('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SUCCESS)).toBeTrue();
  });

  it('should set info class', () => {
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.INFO)).toBeFalse();
    component.info('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.INFO)).toBeTrue();
  });

  it('should set error class', () => {
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.ERROR)).toBeFalse();
    component.error('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.ERROR)).toBeTrue();
  });

  it('should set show class on success call', () => {
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.HIDE)).toBeTrue();
    component.success('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SHOW)).toBeTrue();
  });

  it('should set show class on info call', () => {
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.HIDE)).toBeTrue();
    component.info('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SHOW)).toBeTrue();
  });

  it('should set show class on error call', () => {
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SHOW)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.HIDE)).toBeTrue();
    component.error('Title', 'Text');
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.HIDE)).toBeFalse();
    expect(component.containerElemt.nativeElement.classList.contains(NotificationComponent.SHOW)).toBeTrue();
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

  it('should set time', () => {
    expect(component.timeElemt.nativeElement.innerHTML).toBe('');
    component.error('Changed_Title', 'Changed_Text');
    expect(component.textElemt.nativeElement.innerHTML).not.toBe('');
  });
});
