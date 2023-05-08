import { BooleanCalculator } from "./index";
import { ERROR_MSG } from "./index";

describe("boolean calculator", () => {
  let booleanCalculator: BooleanCalculator;

  beforeEach(() => {
    booleanCalculator = new BooleanCalculator();
  });

  test("evaluates an expression if it is a single 'TRUE' or 'FALSE' value", () => {
    expect(booleanCalculator.evaluate("TRUE")).toBeTruthy();
    expect(booleanCalculator.evaluate("FALSE")).toBeFalsy();
  });

  test("evaluates an expression if it is a single 'NOT TRUE' or 'NOT FALSE' value negation ", () => {
    expect(booleanCalculator.evaluate("NOT TRUE")).toBeFalsy();
    expect(booleanCalculator.evaluate("NOT FALSE")).toBeTruthy();
  });

  test("evaluates expressions with 'NOT', 'AND, and 'OR' operators with priority as listed", () => {
    expect(booleanCalculator.evaluate("NOT NOT TRUE")).toBeTruthy();
    expect(booleanCalculator.evaluate("FALSE AND FALSE")).toBeFalsy();
    expect(booleanCalculator.evaluate("FALSE OR TRUE")).toBeTruthy();
    expect(booleanCalculator.evaluate("NOT FALSE AND NOT TRUE")).toBeFalsy();
    expect(booleanCalculator.evaluate("NOT TRUE OR NOT FALSE")).toBeTruthy();
  });

  test("evaluates expressions with valid parentheses like '(TRUE OR TRUE OR TRUE) AND FALSE'", () => {
    expect(
      booleanCalculator.evaluate("(TRUE OR TRUE OR TRUE) AND FALSE")
    ).toBeFalsy();
  });

  test("knows that an expression cannot start with an 'AND' or 'OR' operator", () => {
    expect(() => booleanCalculator.evaluate("AND TRUE OR FALSE")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that an expression cannot end with a 'NOT' operator", () => {
    expect(() => booleanCalculator.evaluate("TRUE AND FALSE OR NOT")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that 'eeaaTRUE AND eeeeTRUE' is an invalid expression", () => {
    expect(() => booleanCalculator.evaluate("eeaaTRUE AND eeeeTRUE")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that 'ASDJEWEK' is an invalid boolean expression", () => {
    expect(() => booleanCalculator.evaluate("ASDJEWEK")).toThrow(ERROR_MSG);
  });

  test("throws error if invalid operators or values used like 'GREEN OR TRUE FINDS ELEPHANT'", () => {
    expect(() =>
      booleanCalculator.evaluate("GREEN OR TRUE AND ELEPHANT")
    ).toThrow(ERROR_MSG);
  });

  test("knows that 'NOT OR TRUE' is an invalid expression", () => {
    expect(() => booleanCalculator.evaluate("NOT OR TRUE AND FALSE")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that 'NOT FALSE FALSE' is an invalid expression", () => {
    expect(() => booleanCalculator.evaluate("NOT FALSE FALSE")).toThrow(
      ERROR_MSG
    );
  });
});
