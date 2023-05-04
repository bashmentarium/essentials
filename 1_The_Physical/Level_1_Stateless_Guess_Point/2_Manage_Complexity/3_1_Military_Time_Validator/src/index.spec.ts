import { MilitaryTimeValidator } from "./index";

describe("military time validator", () => {
  let militaryTimeValidator: MilitaryTimeValidator;

  beforeEach(() => {
    militaryTimeValidator = new MilitaryTimeValidator();
  });

  it('knows that "01:00 - 11:00" is a valid military time', () => {
    expect(militaryTimeValidator.validate("01:00 - 11:00")).toBeTruthy();
  });

  test("knows that left side is a valid military time", () => {
    expect(militaryTimeValidator.validate("01:00 - 00w:00")).toBeTruthy();
  });

  test("knows that right side is a valid military time", () => {
    expect(militaryTimeValidator.validate("02:00 - 04:00")).toBeTruthy();
  });

  test("knows that the start time hours cannot be later than end time hours", () => {
    expect(militaryTimeValidator.validate("02:00 - 01:00")).toBeFalsy();
  });

  test("know that when the time period is less than an hour, the starting minutes cannot be later than the ending minutes.", () => {
    expect(militaryTimeValidator.validate("01:15 - 01:05")).toBeFalsy();
  });

  test("knows that an empty string is not a valid time", () => {
    expect(militaryTimeValidator.validate("")).toBeFalsy();
  });

  test('knows that "25:15 - 26:14" is an impossible hours value', () => {
    expect(militaryTimeValidator.validate("25:15 - 26:14")).toBeFalsy();
  });

  test('knows that "23:60 - 23:61" is an impossible minutes value', () => {
    expect(militaryTimeValidator.validate("23:60 - 23:61")).toBeFalsy();
  });

  test("knows that negative values cannot be used as hours", () => {
    expect(militaryTimeValidator.validate("-12:00 - 13:50")).toBeFalsy();
  });

  test("knows that negative values cannot be used as minutes", () => {
    expect(militaryTimeValidator.validate("10:00 - 11:-50")).toBeFalsy();
  });

  test("knows that '010011:00' is not a valid military time", () => {
    expect(militaryTimeValidator.validate("010011:00")).toBeFalsy();
  });

  test('knows that "0100- 1:00" is not a valid military time', () => {
    expect(militaryTimeValidator.validate("0100- 1:00")).toBeFalsy();
  });

  test('knows that "1:00 - 0100" is not a valid military time', () => {
    expect(militaryTimeValidator.validate("1:00 - 0100")).toBeFalsy();
  });

  test('knows that "0100 - 01:00" is not a valid military time', () => {
    expect(militaryTimeValidator.validate("0100 - 01:00")).toBeFalsy();
  });
});
