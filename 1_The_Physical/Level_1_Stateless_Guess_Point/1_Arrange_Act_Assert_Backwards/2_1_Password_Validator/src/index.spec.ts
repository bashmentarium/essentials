import { PasswordChecker } from "./index";

describe("password validator", () => {
  test("exists", () => {
    const passwordChecker = new PasswordChecker();

    expect(passwordChecker.checkPassword("mo7herS")).toBeTruthy();
  });

  test("returns an invalid length error when strings like 'mom' are less than 5 characters", () => {
    const passwordChecker = new PasswordChecker();

    expect(passwordChecker.checkPassword("mom")).toBe("InvalidLengthError");
  });

  test("returns an invalid length error when strings like 'dsadnwdqdwijdqwdiqjwd' are more than 15 characters", () => {
    const passwordChecker = new PasswordChecker();

    expect(passwordChecker.checkPassword("dsadnwdqdwijdqwdiqjwd")).toBe(
      "InvalidLengthError"
    );
  });
});
