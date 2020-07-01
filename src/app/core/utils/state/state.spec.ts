import { State } from './state';

describe('State', () => {
  it('should create an instance', () => {
    expect(new State()).toBeTruthy();
  });

  it('should set value', () => {
    let state = new State();

    state.value = true;
    expect(state.value).toBeTrue();

    state.value = false;
    expect(state.value).toBeFalse();
  });

  it('should get value', () => {
    let state = new State();
    state.value = true;
    expect(state.value).toBeTrue();

    state.value = false;
    expect(state.value).toBeFalse();
  });

  it('should reset value', () => {
    let state = new State();
    state.value = true;
    expect(state.value).toBeTrue();

    state.reset();
    expect(state.value).toBeUndefined();
  });

  it('should be dirty', () => {
    let state = new State();
    state.value = true;
    expect(state.value).toBeTrue();
    expect(state.isDirty()).toBeTrue();

    state.reset();
    expect(state.value).toBeUndefined();
    expect(state.isDirty()).toBeFalse();

    state.value = false;
    expect(state.value).toBeFalse();
    expect(state.isDirty()).toBeTrue();

    state.reset();
    expect(state.value).toBeUndefined();
    expect(state.isDirty()).toBeFalse();
  });

  it('should be clean', () => {
    let state = new State();
    state.value = true;
    expect(state.value).toBeTrue();
    expect(state.isClean()).toBeFalse();

    state.reset();
    expect(state.value).toBeUndefined();
    expect(state.isClean()).toBeTrue();

    state.value = false;
    expect(state.value).toBeFalse();
    expect(state.isClean()).toBeFalse();

    state.reset();
    expect(state.value).toBeUndefined();
    expect(state.isClean()).toBeTrue();
  });

  it('should have valid isTrue() value', () => {
    let state = new State();
    state.value = true;
    expect(state.isTrue()).toBeTrue();

    state.reset();
    expect(state.value).toBeUndefined();

    state.value = false;
    expect(state.isTrue()).toBeFalse();
  });

  it('should have valid isFalse() value', () => {
    let state = new State();
    state.value = true;
    expect(state.isFalse()).toBeFalse();

    state.reset();
    expect(state.value).toBeUndefined();

    state.value = false;
    expect(state.isFalse()).toBeTrue();
  });
});
