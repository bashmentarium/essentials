import { Result } from "../result";
import {
  LAST_NAME_EMPTY_ERROR,
  LAST_NAME_TOO_SHORT_ERROR,
  LAST_NAME_TOO_LONG_ERROR,
} from "../index";

export class StudentLastName {
  lastName: string;

  private constructor(lastName: string) {
    this.lastName = lastName;
  }

  static create(lastName: string) {
    if (lastName === "") {
      return Result.isNotValid({
        message: LAST_NAME_EMPTY_ERROR,
        type: "INVALID_LAST_NAME",
      });
    }

    if (lastName.length < 2) {
      return Result.isNotValid({
        message: LAST_NAME_TOO_SHORT_ERROR,
        type: "INVALID_LAST_NAME",
      });
    }

    if (lastName.length > 10) {
      return Result.isNotValid({
        message: LAST_NAME_TOO_LONG_ERROR,
        type: "INVALID_LAST_NAME",
      });
    }

    return Result.isValid(new StudentLastName(lastName));
  }
}
