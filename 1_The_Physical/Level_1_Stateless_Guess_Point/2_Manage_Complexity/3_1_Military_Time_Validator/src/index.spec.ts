import { TimeValidator, WRONG_FORMAT_ERROR } from "./index";

describe("military time validator", () => {
  test("validates time presented as strings like '22:15 - 23:00'", () => {
    const timeValidator = new TimeValidator();

    expect(timeValidator.validateTime("22:15 - 23:00")).toBeTruthy();
  });

  test("does not validate strings different from a proper time range like 'asdkopil'", () => {
    const timeValidator = new TimeValidator();

    expect(timeValidator.validateTime("asdkopil")).toBe(WRONG_FORMAT_ERROR);
  });

  test("does not validate impossible hours like '25:00 - 12:23'", () => {
    const timeValidator = new TimeValidator();

    expect(timeValidator.validateTime("25:00 - 12:23")).toBe(
      WRONG_FORMAT_ERROR
    );
  });

  test("does not validate impossible hours like '22:78 - 06:40'", () => {
    const timeValidator = new TimeValidator();

    expect(timeValidator.validateTime("22:78 - 06:40")).toBe(
      WRONG_FORMAT_ERROR
    );
  });

  test("does not validate impossible hours like '03:15 - 11:60'", () => {
    const timeValidator = new TimeValidator();

    expect(timeValidator.validateTime("03:15 - 11:60")).toBe(
      WRONG_FORMAT_ERROR
    );
  });
});
