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

  test("evaluates expressions that contain only valid operators and boolean values", () => {
    expect(booleanCalculator.evaluate("TRUE AND TRUE OR FALSE")).toBeTruthy();
  });

  test("knows that an empty string is not a valid expression", () => {
    expect(() => booleanCalculator.evaluate(" ")).toThrow(ERROR_MSG);
  });

  test("knows that 'TRUE AND FALSE OR NOT' is an invalid expression", () => {
    expect(() => booleanCalculator.evaluate("TRUE AND FALSE OR NOT")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that an expression cannot start with 'AND' operator", () => {
    expect(() => booleanCalculator.evaluate("AND TRUE OR FALSE")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that an expression cannot start with 'OR' operator", () => {
    expect(() => booleanCalculator.evaluate("OR FALSE AND FALSE")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that an expression cannot end with an operator", () => {
    expect(() => booleanCalculator.evaluate("FALSE AND FALSE OR")).toThrow(
      ERROR_MSG
    );
  });

  test("knows that 'GREEN OR TRUE' is an invalid expression", () => {
    expect(() => booleanCalculator.evaluate("GREEN OR TRUE")).toThrow(
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
});
