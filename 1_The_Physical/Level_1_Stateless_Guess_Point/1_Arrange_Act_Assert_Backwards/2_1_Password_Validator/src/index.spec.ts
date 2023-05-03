import { PasswordChecker, CheckPasswordResponse } from "./index";

describe("password validator", () => {
  let passwordChecker: PasswordChecker;

  beforeEach(() => {
    passwordChecker = new PasswordChecker();
  });

  test("returns an invalid length error when strings like 'mom' are less than 5 characters", () => {
    let response: CheckPasswordResponse;

    response = passwordChecker.checkPassword("mom");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("InvalidLengthError");
  });

  test("returns an invalid length error when strings like 'dsadnwdqdwijdqwdiqjwd' are more than 15 characters", () => {
    let response: CheckPasswordResponse;

    response = passwordChecker.checkPassword("dsadnwdqdwijdqwdiqjwd");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("InvalidLengthError");
  });

  it('returns an error if words like "mo7hers" dont contain at least one uppercase character', () => {
    let response: CheckPasswordResponse;

    response = passwordChecker.checkPassword("mo7hers");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toBeGreaterThanOrEqual(1);
    expect(response.errors).toContain("NoUppercaseError");
  });

  it('returns a successful response if words like "Mo7hers" contain at least one uppercase character', () => {
    let response: CheckPasswordResponse;

    response = passwordChecker.checkPassword("Mo7hers");

    expect(response.result).toBeTruthy();
    expect(response.errors.length).toBeGreaterThanOrEqual(0);
  });

  it('returns multiple errors when there is no uppercase and no number and invalid length like in "ab"', () => {
    let response: CheckPasswordResponse;

    response = passwordChecker.checkPassword("ab");

    expect(response.result).toBeFalsy();
    expect(response.errors.length).toEqual(3);
    expect(response.errors).toContain("NoUppercaseError");
    expect(response.errors).toContain("MissingDigitError");
    expect(response.errors).toContain("InvalidLengthError");
  });
});
