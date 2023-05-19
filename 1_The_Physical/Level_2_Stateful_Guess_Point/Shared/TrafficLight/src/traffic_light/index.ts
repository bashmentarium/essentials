import { Status, StatusOptions } from "../status";
import { Color, ColorType, ColorOptions } from "../color";

export class TrafficLight {
  private _status: Status;
  private _startingColor: Color;
  private _colorOnDisplay: Color | null = null;

  private constructor() {
    this._status = Status.create();
    this._startingColor = Color.create(ColorOptions.GREEN);
  }

  static create(): TrafficLight {
    return new TrafficLight();
  }

  turnOn(): void {
    this._status = Status.create(StatusOptions.ON);
    this._colorOnDisplay = this._startingColor;
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

  private changeColor(color: Color): void {
    this._colorOnDisplay = color;
  }
}
