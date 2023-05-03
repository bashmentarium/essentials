type PasswordError =
  | "InvalidLengthError"
  | "MissingDigitError"
  | "NoUppercaseError";

export type CheckPasswordResponse = {
  result: boolean;
  errors: PasswordError[];
};

const isLengthBetween = (start: number, end: number, text: string) => {
  return text.length >= start && text.length <= end;
};

const hasDigits = (text: string) => {
  return /\d/.test(text);
};

const hasUpperCaseLetters = (text: string) => {
  return Boolean(text.match(/[A-Z]/));
};

export class PasswordChecker {
  checkPassword(password: string) {
    let errors: PasswordError[] = [];
    if (!isLengthBetween(5, 15, password)) errors.push("InvalidLengthError");
    if (!hasDigits(password)) errors.push("MissingDigitError");
    if (!hasUpperCaseLetters(password)) errors.push("NoUppercaseError");
    return {
      result: errors.length === 0,
      errors,
    };
  }
}
