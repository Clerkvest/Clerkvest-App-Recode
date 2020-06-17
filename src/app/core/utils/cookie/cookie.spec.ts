import { Cookie } from './cookie';

describe('Cookie', () => {

  let flaglessCookie = 'key=val';
  let expiringFlagCookie = 'key=val ; expires=date';
  let pathFlagCookie = 'key=val ; path=/';
  let domainFlagCookie = 'key=val ; domain=domain.de';
  let securedFlagCookie = 'key=val ; secure';

  let flaggedCookie = 'key=val ; expires=date ; path=/ ; domain=domain.de ; secure';

  it('should create an instance', () => {
    expect(new Cookie()).toBeTruthy();
  });

  it('should create string without flags', () => {
    let cookie: Cookie = new Cookie();
    cookie.key = 'key';
    cookie.value = 'val';

    expect(cookie.toString()).toBe(flaglessCookie);
  });

  it('should create string with expiring flag', () => {
    let cookie: Cookie = new Cookie();
    cookie.key = 'key';
    cookie.value = 'val';
    cookie.expires = 'date';

    expect(cookie.toString()).toBe(expiringFlagCookie);
  });

  it('should create string with path flag', () => {
    let cookie: Cookie = new Cookie();
    cookie.key = 'key';
    cookie.value = 'val';
    cookie.path = '/';

    expect(cookie.toString()).toBe(pathFlagCookie);
  });

  it('should create string with domain flag', () => {
    let cookie: Cookie = new Cookie();
    cookie.key = 'key';
    cookie.value = 'val';
    cookie.domain = 'domain.de';

    expect(cookie.toString()).toBe(domainFlagCookie);
  });

  it('should create string with secure flag', () => {
    let cookie: Cookie = new Cookie();
    cookie.key = 'key';
    cookie.value = 'val';
    cookie.secure = true;

    expect(cookie.toString()).toBe(securedFlagCookie);
  });

  it('should create string with all flags', () => {
    let cookie: Cookie = new Cookie();
    cookie.key = 'key';
    cookie.value = 'val';
    cookie.expires = 'date';
    cookie.path = '/';
    cookie.domain = 'domain.de';
    cookie.secure = true;

    expect(cookie.toString()).toBe(flaggedCookie);
  });
});
