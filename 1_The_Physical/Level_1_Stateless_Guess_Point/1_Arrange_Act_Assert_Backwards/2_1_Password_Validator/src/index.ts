const isLengthBetween = (start: number, end: number, text: string) => {
  return text.length >= start && text.length <= end;
};

export class PasswordChecker {
  checkPassword(password: string) {
    if (!isLengthBetween(5, 15, password)) {
      return "InvalidLengthError";
    } else {
      return true;
    }
  }
}
