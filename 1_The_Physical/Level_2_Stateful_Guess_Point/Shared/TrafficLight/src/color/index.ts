export enum ColorOptions {
  RED = "RED",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
}

export class Color {
  private _value: ColorOptions;

  constructor(color: ColorOptions) {
    this._value = color;
  }

  get value() {
    return this._value;
  }

  set value(color: ColorOptions) {
    this._value = color;
  }
}
