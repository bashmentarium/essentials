const isLengthBetween = (start: number, end: number, text: string) => {
  return text.length >= start && text.length <= end;
};

const hasDigits = (text: string) => {
  return /\d/.test(text);
};

const hasUpperCaseLetter = (text: string) => {
  return /A-Z/.test(text);
};

export class PasswordChecker {
  checkPassword(password: string) {
    if (!isLengthBetween(5, 15, password)) return "InvalidLengthError";
    if (!hasDigits(password)) return "MissingDigitError";
    if (!hasUpperCaseLetter(password)) return "NoUppercaseError";
    return true;
  }
}
