import { MilitaryTimeValidator } from "./index";

describe("military time validator", () => {
  it('knows that "01:00 - 11:00" is a valid military time', () => {
    const militaryTimeValidator = new MilitaryTimeValidator();

    expect(militaryTimeValidator.validate("01:00 - 11:00")).toBeTruthy();
  });

  test("knows that an empty string is not a valid time", () => {
    const militaryTimeValidator = new MilitaryTimeValidator();

    expect(militaryTimeValidator.validate("")).toBeFalsy();
  });

  test("knows that '010011:00' is not a valid military time", () => {
    const militaryTimeValidator = new MilitaryTimeValidator();

    expect(militaryTimeValidator.validate("010011:00")).toBeFalsy();
  });

  it('knows that "0100- 1:00" is not a valid military time', () => {
    const militaryTimeValidator = new MilitaryTimeValidator();

    expect(militaryTimeValidator.validate("0100- 1:00")).toBeFalsy();
  });

  it('knows that "1:00 - 0100" is not a valid military time', () => {
    const militaryTimeValidator = new MilitaryTimeValidator();

    expect(militaryTimeValidator.validate("1:00 - 0100")).toBeFalsy();
  });

  it('knows that "0100 - 01:00" is not a valid military time', () => {
    const militaryTimeValidator = new MilitaryTimeValidator();

    expect(militaryTimeValidator.validate("0100 - 01:00")).toBeFalsy();
  });
});
