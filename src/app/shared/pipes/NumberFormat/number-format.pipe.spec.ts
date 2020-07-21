import { NumberFormatPipe } from './number-format.pipe';
import { CookieService } from 'src/app/core/utils/cookie/cookie.service';

describe('NumberFormatPipe', () => {

  let pipe: NumberFormatPipe;

  beforeEach(() => {
    pipe = new NumberFormatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format decimals', () => {
    expect(pipe.transform(1.22)).toBe('1,22');
  });

  it('should format 1000s', () => {
    expect(pipe.transform(10000)).toBe('10.000,00');
  });

  it('should format decimals and 1000s', () => {
    expect(pipe.transform(10000.11)).toBe('10.000,11');
  });
});
