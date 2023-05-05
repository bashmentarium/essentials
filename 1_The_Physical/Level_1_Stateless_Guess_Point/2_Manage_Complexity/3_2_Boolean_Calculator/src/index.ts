const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];
export const ERROR_MSG = "Invalid Boolean expression!";

export class BooleanCalculator {
  public evaluate(text: string): boolean | string {
    if (text.trim() === "") throw new Error(ERROR_MSG);
    if (text === "TRUE") return true;
    if (text === "FALSE") return false;

    if (text === "NOT TRUE") return false;
    if (text === "NOT FALSE") return true;

    if (
      text.indexOf("NOT") === -1 &&
      text.indexOf("AND") === -1 &&
      text.indexOf("OR") === -1
    ) {
      throw new Error(ERROR_MSG);
    }

    const splitExpression = text.trim().split(" ");

    if (splitExpression[splitExpression.length - 1] === "NOT") {
      throw new Error(ERROR_MSG);
    }

    if (splitExpression[0] === "AND") {
      throw new Error(ERROR_MSG);
    }

    if (splitExpression[0] === "OR") {
      throw new Error(ERROR_MSG);
    }

    if (
      splitExpression[splitExpression.length - 1] === "NOT" ||
      splitExpression[splitExpression.length - 1] === "AND" ||
      splitExpression[splitExpression.length - 1] === "OR"
    ) {
      throw new Error(ERROR_MSG);
    }

    const isExpressionValid: boolean = splitExpression.every(
      (expression: string) => {
        return validValues.indexOf(expression) >= 0;
      }
    );

    if (isExpressionValid) {
      return true;
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
