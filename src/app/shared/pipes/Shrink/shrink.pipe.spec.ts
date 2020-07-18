import { TestBed, async } from '@angular/core/testing';
import { ShrinkPipe } from './shrink.pipe';

describe('ShrinkPipe', () => {

  let pipe: ShrinkPipe;

  beforeEach(() => {
    pipe = new ShrinkPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should shrink', () => {
    expect(pipe.transform('Lorem ipsum', '5')).toBe('Lorem ...');
  });

  it('should not shrink', () => {
    expect(pipe.transform('Lorem ipsum', '100')).toBe('Lorem ipsum');
  });
});
