import { PasswordChecker } from "./index";

describe("password validator", () => {
  let passwordChecker: PasswordChecker;

  beforeEach(() => {
    passwordChecker = new PasswordChecker();
  });

  test("exists", () => {
    expect(passwordChecker.checkPassword("mo7herS")).toBeTruthy();
  });

  test("returns an invalid length error when strings like 'mom' are less than 5 characters", () => {
    expect(passwordChecker.checkPassword("mom")).toBe("InvalidLengthError");
  });

  test("returns an invalid length error when strings like 'dsadnwdqdwijdqwdiqjwd' are more than 15 characters", () => {
    expect(passwordChecker.checkPassword("dsadnwdqdwijdqwdiqjwd")).toBe(
      "InvalidLengthError"
    );
  });

  test("returns a true value if the password contains a number", () => {
    expect(passwordChecker.checkPassword("str8from")).toBeTruthy();
  });

  test("returns a missing digits error if the password doesn't contain a number", () => {
    expect(passwordChecker.checkPassword("lalalalala")).toBe(
      "MissingDigitError"
    );
  });

  test("returns a true value if the password contains an uppercase letter", () => {
    expect(passwordChecker.checkPassword("Str8from")).toBeTruthy();
  });

  test("returns a no uppercase error if the password doesn't contain an uppercase letter", () => {
    expect(passwordChecker.checkPassword("lalal6lala")).toBe(
      "NoUppercaseError"
    );
  });
});
