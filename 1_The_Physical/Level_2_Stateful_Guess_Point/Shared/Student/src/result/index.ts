import { StudentFirstName } from "../first-name";
import { StudentLastName } from "../last-name";
import { StudentEvent } from "../index";

export interface Error {
  message: string;
  type: string;
}

interface ResultI<T> {
  studentProfile: T;
  errors: Error[];
}

export class Result<T> {
  studentProfile: T;
  errors: Error[];
  events: StudentEvent[];

  constructor(props: ResultI<T>) {
    this.studentProfile = props.studentProfile;
    this.errors = props.errors;
    this.events = [];
  }

  getFirstError(): Error {
    return this.errors[0];
  }

  hasErrors(): boolean {
    return this.errors.length > 0;
  }

  static isValid<T>(studentProfile: T): Result<T> {
    return new Result<T>({ studentProfile, errors: [] });
  }

  static isNotValid(error: Error): Result<null> {
    return new Result<null>({ studentProfile: null, errors: [error] });
  }

  updateFirstName(newFirstName: string): void | Error {
    const result = StudentFirstName.create(newFirstName);

    if (result.hasErrors()) {
      return result.getFirstError();
    }

    this.studentProfile = result.studentProfile as T;
    this.events = [
      ...this.events,
      {
        type: "UPDATE_FIRST_NAME",
        payload: newFirstName,
      },
    ];
  }

  updateLastName(newLastName: string): void | Error {
    const result = StudentLastName.create(newLastName);

    if (result.hasErrors()) {
      return result.getFirstError();
    }

    this.studentProfile = result.studentProfile as T;
    this.events = [
      ...this.events,
      {
        type: "UPDATE_LAST_NAME",
        payload: newLastName,
      },
    ];
  }
}
