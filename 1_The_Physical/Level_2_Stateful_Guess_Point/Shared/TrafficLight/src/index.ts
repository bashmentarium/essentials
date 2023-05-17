import { Status, StatusOptions } from "./status";
import { Color, ColorOptions, ColorType } from "./color";

export class TrafficLight {
  private _status: Status;
  private _colorOnDisplay: Color | null = null;

  private constructor() {
    this._status = Status.create(StatusOptions.OFF);
  }

  static create(): TrafficLight {
    return new TrafficLight();
  }

  turnOn(color: Color): void {
    this._status = Status.create(StatusOptions.ON);
    this._colorOnDisplay = color;
  }

  turnOff(): void {
    this._status = Status.create(StatusOptions.OFF);
    this._colorOnDisplay = null;
  }

  get status(): StatusOptions {
    return this._status.value as StatusOptions;
  }

  get colorOnDisplay(): ColorType | null {
    return this._colorOnDisplay?.value ?? null;
  }
}
