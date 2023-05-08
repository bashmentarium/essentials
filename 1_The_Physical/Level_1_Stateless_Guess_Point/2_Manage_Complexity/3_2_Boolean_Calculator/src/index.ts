export const ERROR_MSG = "Invalid Boolean expression!";
const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];

function evaluateNegationOperators(expression: string[]): string[] {
  if (expression && expression.length > 1) {
    let singleEvaluatedExpression;
    const operatorIndex = expression.lastIndexOf("NOT");

    if (expression.lastIndexOf("NOT") >= 0) {
      let operand = expression[operatorIndex + 1] === "TRUE";

      singleEvaluatedExpression = !operand;

      expression.splice(
        operatorIndex,
        2,
        singleEvaluatedExpression.toString().toUpperCase()
      );

      evaluateNegationOperators(expression);
    }
  }

  return expression;
}

function evaluateAndOperators(expression: string[]): string[] {
  if (expression && expression.length > 1) {
    let singleEvaluatedExpression;
    const operatorIndex = expression.indexOf("AND");

    if (expression.indexOf("AND") >= 0) {
      const leftSideOperand = expression[operatorIndex - 1] === "TRUE";
      const rightSideOperand = expression[operatorIndex + 1] === "TRUE";

      singleEvaluatedExpression = leftSideOperand && rightSideOperand;

      expression.splice(
        operatorIndex - 1,
        3,
        singleEvaluatedExpression.toString().toUpperCase()
      );

      evaluateAndOperators(expression);
    }
  }

  return expression;
}

function evaluateOrOperators(expression: string[]): string[] {
  if (expression && expression.length > 1) {
    let singleEvaluatedExpression;
    const operatorIndex = expression.indexOf("OR");

    if (expression.indexOf("OR") >= 0) {
      const leftSideOperand = expression[operatorIndex - 1] === "TRUE";
      const rightSideOperand = expression[operatorIndex + 1] === "TRUE";

      singleEvaluatedExpression = leftSideOperand || rightSideOperand;

      expression.splice(
        operatorIndex - 1,
        3,
        singleEvaluatedExpression.toString().toUpperCase()
      );

      evaluateOrOperators(expression);
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
      evaluateNegationOperators(splitExpression);

      evaluateAndOperators(splitExpression);

      evaluateOrOperators(splitExpression);

      return convertExpressionToBoolean(splitExpression);
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
