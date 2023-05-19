export type StatusType = "ON" | "OFF";

export class Status {
  private _status: StatusType = StatusOptions.OFF;

  private constructor(statusOption?: StatusType) {
    if (statusOption) this._status = statusOption;
    if (!statusOption) this._status = StatusOptions.OFF;
  }

  get value(): string | StatusOptions.OFF {
    return this._status;
  }

  static create(statusOption?: StatusType): Status {
    return new Status(statusOption);
  }
}

export enum StatusOptions {
  ON = "ON",
  OFF = "OFF",
}
