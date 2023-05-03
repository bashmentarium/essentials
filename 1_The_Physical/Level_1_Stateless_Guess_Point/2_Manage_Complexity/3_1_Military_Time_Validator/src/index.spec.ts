import { TimeValidator } from "./index";

describe("military time validator", () => {
  test("should exist", () => {
    const timeValidator = new TimeValidator();

    expect(timeValidator.validateTime("22:00 - 11:00")).toBeDefined();
  });
});
