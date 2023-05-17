import { Status, StatusOptions } from "./status";
import { Color, ColorOptions } from "./color";

export class TrafficLight {
  private _status: Status;
  private _color: Color = new Color(ColorOptions.RED);

  constructor() {
    this._status = new Status(StatusOptions.OFF);
  }

  get status(): string {
    return this._status.value;
  }

  get color(): string {
    return this._color.value;
  }

  turnOn(): void {
    this._status = new Status(StatusOptions.ON);
  }

  turnOff(): void {
    this._status = new Status(StatusOptions.OFF);
  }
}
