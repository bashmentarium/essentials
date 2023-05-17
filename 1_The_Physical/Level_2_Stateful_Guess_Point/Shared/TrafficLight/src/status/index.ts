export enum StatusOptions {
  OFF = "OFF",
  ON = "ON",
}

export class Status {
  private _status: StatusOptions;

  constructor(statusOption: StatusOptions) {
    this._status = statusOption;
  }

  get value(): string {
    return this._status;
  }
}
