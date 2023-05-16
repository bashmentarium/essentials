import { Result } from "../result";
import {
  FIRST_NAME_EMPTY_ERROR,
  FIRST_NAME_TOO_SHORT_ERROR,
  FIRST_NAME_TOO_LONG_ERROR,
} from "../index";

export class StudentFirstName {
  firstName: string;

  private constructor(firstName: string) {
    this.firstName = firstName;
  }

  static create(firstName: string): Result<StudentFirstName | null> {
    if (firstName === "") {
      return Result.isNotValid({
        message: FIRST_NAME_EMPTY_ERROR,
        type: "INVALID_FIRST_NAME",
      });
    }

    if (firstName.length < 2) {
      return Result.isNotValid({
        message: FIRST_NAME_TOO_SHORT_ERROR,
        type: "INVALID_FIRST_NAME",
      });
    }

    if (firstName.length > 10) {
      return Result.isNotValid({
        message: FIRST_NAME_TOO_LONG_ERROR,
        type: "INVALID_FIRST_NAME",
      });
    }

    return Result.isValid(new StudentFirstName(firstName));
  }
}
