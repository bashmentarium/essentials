import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  test('evaluates an expression if it is at least a "TRUE" or "FALSE" value', () => {
    const booleanCalculator = new BooleanCalculator();

    expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
    expect(booleanCalculator.evaluate("FALSE")).toBeFalsy();
  });

  test("evaluates single value negation", () => {
    const booleanCalculator = new BooleanCalculator();

    expect(booleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
    expect(booleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
  });

  test("knows that 'ASDJEWEK' is an invalid boolean expression", () => {
    const booleanCalculator = new BooleanCalculator();

    expect(() => booleanCalculator.evaluate("ASDJEWEK")).toThrow(
      "Invalid Boolean expression!"
    );
  });
});
