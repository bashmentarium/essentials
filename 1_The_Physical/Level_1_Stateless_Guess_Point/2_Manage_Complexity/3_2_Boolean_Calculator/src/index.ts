export const ERROR_MSG = "Invalid Boolean expression!";
const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];

function evaluateOperators(expression: string[]): string[] {
  if (expression && expression.length > 1) {
    const notOperatorIndex = expression.lastIndexOf("NOT");
    const andOperatorIndex = expression.indexOf("AND");
    const orOperatorIndex = expression.indexOf("OR");
    let singleEvaluatedExpression;

    if (notOperatorIndex >= 0) {
      if (
        expression[notOperatorIndex + 1] !== "TRUE" &&
        expression[notOperatorIndex + 1] !== "FALSE"
      )
        throw new Error("Invalid Boolean expression!");

      let operand = expression[notOperatorIndex + 1] === "TRUE";

      singleEvaluatedExpression = !operand;

      expression.splice(
        notOperatorIndex,
        2,
        singleEvaluatedExpression.toString().toUpperCase()
      );

      evaluateOperators(expression);
    }

    if (andOperatorIndex >= 0) {
      const leftSideOperand = expression[andOperatorIndex - 1] === "TRUE";
      const rightSideOperand = expression[andOperatorIndex + 1] === "TRUE";

      singleEvaluatedExpression = leftSideOperand && rightSideOperand;

      expression.splice(
        andOperatorIndex - 1,
        3,
        singleEvaluatedExpression.toString().toUpperCase()
      );

      evaluateOperators(expression);
    }

    if (orOperatorIndex >= 0) {
      const leftSideOperand = expression[orOperatorIndex - 1] === "TRUE";
      const rightSideOperand = expression[orOperatorIndex + 1] === "TRUE";

      singleEvaluatedExpression = leftSideOperand || rightSideOperand;

      expression.splice(
        orOperatorIndex - 1,
        3,
        singleEvaluatedExpression.toString().toUpperCase()
      );

      evaluateOperators(expression);
    }
  }

  return expression;
}

function convertExpressionToBoolean(expression: string[]): boolean {
  return expression[0] === "TRUE";
}

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
      evaluateOperators(splitExpression);

      return convertExpressionToBoolean(splitExpression);
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
