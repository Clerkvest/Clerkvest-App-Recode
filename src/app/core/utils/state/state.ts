import { isNullOrUndefined } from 'util';

export class State {

  private _value: boolean

  public isDirty(): boolean {
    return !isNullOrUndefined(this._value);
  }

  public isClean(): boolean {
    return isNullOrUndefined(this._value);
  }

  public reset(): void {
    this._value = undefined;
  }

  public isTrue(): boolean {
    return this._value;
  }

  public isFalse(): boolean {
    return !this._value;
  }

  public get value(): boolean {
    return this._value;
  }

  public set value(value: boolean) {
    this._value = value;
  }
}
