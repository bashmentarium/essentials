import { Status, StatusOptions } from "./status";

export class TrafficLight {
  private _status: Status;

  constructor() {
    this._status = new Status(StatusOptions.OFF);
  }

  get status(): string {
    return this._status.status;
  }

  turnOn(): void {
    this._status = new Status(StatusOptions.ON);
  }

  turnOff(): void {
    this._status = new Status(StatusOptions.OFF);
  }
}
