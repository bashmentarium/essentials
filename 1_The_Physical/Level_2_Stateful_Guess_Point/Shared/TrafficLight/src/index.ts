import { Status, StatusOptions } from "./status";
import { Color } from "./color";

export class TrafficLight {
  status: StatusOptions;
  color: Color = Color.create("RED");

  private constructor() {
    this.status = Status.create(StatusOptions.OFF).value as StatusOptions;
  }

  static create(): TrafficLight {
    return new TrafficLight();
  }

  turnOn(): void {
    this.status = Status.create(StatusOptions.ON).value as StatusOptions;
  }

  turnOff(): void {
    this.status = Status.create(StatusOptions.OFF).value as StatusOptions;
  }

  get currentColor(): string {
    return this.color.value;
  }

  get currentStatus(): string {
    return this.status;
  }
}
