import { isNullOrUndefined } from 'util';

export class Cookie {
    public key: string;
    public value: string;
    public expires?: string;
    public path?: string;
    public domain?: string;
    public secure?: boolean;

    // document.cookie = "theme=twenty; max-age=0; path=/; domain=myhome.me"
    public toString(): string {
        let cookieStr: string = '';

        // "key=value"
        cookieStr = cookieStr + this.key;
        cookieStr = cookieStr + '=' + this.value;

        // "expires=date" flag
        if (!isNullOrUndefined(this.expires)) {
            cookieStr = cookieStr + ' ; expires=' + this.expires;
        }

        // "path=/" flag
        if (!isNullOrUndefined(this.path)) {
            cookieStr = cookieStr + ' ; path=' + this.path;
        }

        // "domain=domain" flag
        if (!isNullOrUndefined(this.domain)) {
            cookieStr = cookieStr + ' ; domain=' + this.domain;
        }

        // "secure" flag
        if (!isNullOrUndefined(this.secure) || this.secure == false) {
            cookieStr = cookieStr + ' ; secure';
        }

        return cookieStr;
    }
}
