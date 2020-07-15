import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalScrollerComponent } from './horizontal-scroller.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'test-scroller',
  template: `
    <div style="width: 300px"></div>
    <div style="width: 300px"></div>
    <div style="width: 300px"></div>
    <div style="width: 300px"></div>
  `
})
class TestHostComponent {
}

describe('HorizontalScrollerComponent', () => {
  let component: HorizontalScrollerComponent;
  let fixture: ComponentFixture<HorizontalScrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalScrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create logger', () => {
    expect(component.logger).toBeTruthy();
  });

  it('should have a defined wrapper element', () => {
    expect(component.wrapperElemt).toBeDefined();
  });

  it('should have the color dark by default', () => {
    expect(component.color).toBe('dark');
  });

  it('should have the displayScrollbar true by default', () => {
    expect(component.displayScrollbar).toBe(true);
  });

  it('should have the scrollStep 200 by default', () => {
    expect(component.scrollStep).toBe(200);
  });

  it('should not render left button on creation', () => {
    expect(component.displayButtonLeft).toBe(false);
  });

  it('should not render right button on creation', () => {
    expect(component.displayButtonRight).toBe(false);
  });

  it('should render title', () => {
    component.title = 'title';
    fixture.detectChanges();
    let titleElemt = fixture.debugElement.query(By.css('h1'));

    expect(titleElemt.nativeElement.innerHTML).toBe('title');
  });

  it('should not render title', () => {
    let titleElemt = fixture.debugElement.query(By.css('h1'));
    expect(titleElemt).toBeNull();
  });

  it('should render sub title', () => {
    component.subTitle = 'subtitle';
    fixture.detectChanges();
    let titleElemt = fixture.debugElement.query(By.css('.subtitle'));

    expect(titleElemt.nativeElement.innerHTML).toBe('subtitle');
  });

  it('should not render sub title', () => {
    let titleElemt = fixture.debugElement.query(By.css('.subtitle'));
    expect(titleElemt).toBeNull();
  });
});
