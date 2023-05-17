export class TrafficLight {
  private _status: string = "OFF";

  get status(): string {
    return this._status;
  }

  turnOn(): void {
    this._status = "ON";
  }

  turnOff(): void {
    this._status = "OFF";
  }
}
