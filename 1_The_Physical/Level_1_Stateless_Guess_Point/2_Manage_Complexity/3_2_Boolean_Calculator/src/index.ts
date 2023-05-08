const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];
export const ERROR_MSG = "Invalid Boolean expression!";

export class BooleanCalculator {
  public evaluate(text: string): boolean | string | void {
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
    const firstExpressionItem = splitExpression[0];
    const lastExpressionItem = splitExpression[splitExpression.length - 1];

    if (firstExpressionItem === "AND" || firstExpressionItem === "OR") {
      throw new Error(ERROR_MSG);
    }

    if (
      lastExpressionItem === "NOT" ||
      lastExpressionItem === "AND" ||
      lastExpressionItem === "OR"
    ) {
      throw new Error(ERROR_MSG);
    }

    const isExpressionValid: boolean = splitExpression.every(
      (expression: string) => {
        return validValues.indexOf(expression) >= 0;
      }
    );

    if (isExpressionValid) {
      let operatorIndex: number;
      let leftSideOperand: boolean;
      let rightSideOperand: boolean;

      // Find the 'AND' operator
      operatorIndex = splitExpression.indexOf("AND");
      if (operatorIndex >= 0) {
        leftSideOperand = splitExpression[operatorIndex - 1] === "TRUE";
        rightSideOperand = splitExpression[operatorIndex + 1] === "TRUE";
        return leftSideOperand && rightSideOperand;
      }

      operatorIndex = splitExpression.indexOf("OR");
      if (operatorIndex >= 0) {
        leftSideOperand = splitExpression[operatorIndex - 1] === "TRUE";
        rightSideOperand = splitExpression[operatorIndex + 1] === "TRUE";
        return leftSideOperand || rightSideOperand;
      }
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
