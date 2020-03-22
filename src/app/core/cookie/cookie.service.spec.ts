import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';

describe('CookieService', () => {
  let service: CookieService;

  let undefinedCookie: string = 'shouldBeUndefined';

  let definedCookieKey: string = 'definedKey';
  let definedCookieValue: string = 'definedValue';
  let definedCookieOverwrite: string = 'overwrite'

  let definedCookieValueBooleanTrue: string = 'true';
  let definedCookieValueBooleanFalse: string = 'false';

  let definedCookieValueInt: string = '5';
  let definedCookieValueIntNumber: number = 5;
  let definedCookieValueIntNan: string = 'Na';

  let definedCookieValueFloat: string = '5.5';
  let definedCookieValueFloatNumber: number = 5.5;
  let definedCookieValueFloatNan: string = 'Na';


  beforeEach(() => {
    TestBed.configureTestingModule({providers: [CookieService]});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create logger', () => {
    expect(service.logger).toBeTruthy();
  });

  it('should get undefined cookie', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();
  });

  it('should set and get a cookie', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();

    service.set(definedCookieKey, definedCookieValue);
    expect(service.get(definedCookieKey)).toBe(definedCookieValue);
  });

  it('should check if a cookie exists', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();

    service.set(definedCookieKey, definedCookieValue);
    expect(service.get(definedCookieKey)).toBe(definedCookieValue);

    expect(service.check(definedCookieKey)).toBeTrue();
    expect(service.check(undefinedCookie)).toBeFalse();
  });

  it('should overwrite a cookie', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();

    service.set(definedCookieKey, definedCookieValue);
    expect(service.get(definedCookieKey)).toBe(definedCookieValue);

    service.set(definedCookieKey, definedCookieOverwrite);
    expect(service.get(definedCookieKey)).toBe(definedCookieOverwrite);
  });

  it('should delete a cookie', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();

    service.set(definedCookieKey, definedCookieValue);
    expect(service.get(definedCookieKey)).toBe(definedCookieValue);

    expect(service.check(definedCookieKey)).toBeTrue();
    service.delete(definedCookieKey);
    expect(service.check(definedCookieKey)).toBeFalse();
  });

  it('should set and get cookie as boolean', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();
    
    service.set(definedCookieKey, definedCookieValueBooleanTrue);
    expect(service.getAsBoolean(definedCookieKey)).toBeTrue();

    service.set(definedCookieKey, definedCookieValueBooleanFalse);
    expect(service.getAsBoolean(definedCookieKey)).toBeFalse();
  });

  it('should set and get cookie as int', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();
    
    service.set(definedCookieKey, definedCookieValueInt);
    expect(service.getAsInt(definedCookieKey)).toBe(definedCookieValueIntNumber);

    service.set(definedCookieKey, definedCookieValueIntNan);
    expect(service.getAsInt(definedCookieKey)).toBeNaN();
  });

  it('should set and get cookie as float', () => {
    expect(service.get(undefinedCookie)).toBeUndefined();
    
    service.set(definedCookieKey, definedCookieValueFloat);
    expect(service.getAsFloat(definedCookieKey)).toBe(definedCookieValueFloatNumber);

    service.set(definedCookieKey, definedCookieValueFloatNan);
    expect(service.getAsFloat(definedCookieKey)).toBeNaN();
  });
});
