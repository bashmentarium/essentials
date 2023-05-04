import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  test("knows that 'ASDJEWEK' is an invalid boolean expression", () => {
    const booleanCalculator = new BooleanCalculator();

    expect(() => booleanCalculator.evaluate("ASDJEWEK")).toThrow(
      "Invalid Boolean expression!"
    );
  });
});
