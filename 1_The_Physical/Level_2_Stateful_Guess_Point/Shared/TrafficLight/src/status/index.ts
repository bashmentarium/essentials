export type StatusType = "ON" | "OFF";

export class Status {
  private _status: StatusType;

  private constructor(statusOption: StatusType) {
    this._status = statusOption;
  }

  get value(): string {
    return this._status;
  }

  static create(statusOption: StatusType): Status {
    return new Status(statusOption);
  }
}

export enum StatusOptions {
  ON = "ON",
  OFF = "OFF",
}
