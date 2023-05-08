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

  test("evaluates expressions that contain only AND operator and valid boolean values", () => {
    expect(booleanCalculator.evaluate("FALSE AND FALSE")).toBeFalsy();
    expect(() =>
      booleanCalculator.evaluate("GREEN OR TRUE AND ELEPHANT")
    ).toThrow(ERROR_MSG);
  });

  test("evaluates expressions that contain only OR operator and valid boolean values", () => {
    expect(booleanCalculator.evaluate("TRUE OR FALSE")).toBeTruthy();
  });

  test("knows how to evaluate two 'AND' operators in 'TRUE AND FALSE AND TRUE'", () => {
    expect(booleanCalculator.evaluate("TRUE AND FALSE AND TRUE")).toBeFalsy();
  });

  test("knows that an empty string is not a valid expression", () => {
    expect(() => booleanCalculator.evaluate(" ")).toThrow(ERROR_MSG);
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

  test("knows how to evaluate the 'TRUE AND FALSE' expression", () => {
    expect(booleanCalculator.evaluate("TRUE AND FALSE")).toBeFalsy();
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
