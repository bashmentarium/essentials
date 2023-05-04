import { BooleanCalculator } from "./index";

describe("boolean calculator", () => {
  test('evaluates an expression if it is at least a "TRUE" or "FALSE" value', () => {
    const booleanCalculator = new BooleanCalculator();

    expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
    expect(booleanCalculator.evaluate("FALSE")).toBeFalsy();
  });

  test("evaluates single value negations 'NOT TRUE' and 'NOT FALSE'", () => {
    const booleanCalculator = new BooleanCalculator();

    expect(booleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
    expect(booleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
  });

  test("evaluates only valid expressions", () => {
    const booleanCalculator = new BooleanCalculator();

    expect(booleanCalculator.evaluate("TRUE AND TRUE")).toBeTruthy();
    expect(() => booleanCalculator.evaluate("eeaaTRUE AND eeeeTRUE")).toThrow(
      "Invalid Boolean expression!"
    );
  });

  test("knows that 'ASDJEWEK' is an invalid boolean expression", () => {
    const booleanCalculator = new BooleanCalculator();

    expect(() => booleanCalculator.evaluate("ASDJEWEK")).toThrow(
      "Invalid Boolean expression!"
    );
  });
});
