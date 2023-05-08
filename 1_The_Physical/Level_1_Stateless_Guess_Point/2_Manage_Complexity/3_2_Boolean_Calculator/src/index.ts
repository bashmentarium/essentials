export const ERROR_MSG = "Invalid Boolean expression!";
const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];

function evaluateNotOperators(expression: string[]): void {
  let evaluatedExpression;
  const notOperatorIndex = expression.lastIndexOf("NOT");

  if (notOperatorIndex >= 0) {
    if (
      expression[notOperatorIndex + 1] !== "TRUE" &&
      expression[notOperatorIndex + 1] !== "FALSE"
    )
      throw new Error(ERROR_MSG);

    let operand = expression[notOperatorIndex + 1] === "TRUE";

    evaluatedExpression = !operand;

    expression.splice(
      notOperatorIndex,
      2,
      evaluatedExpression.toString().toUpperCase()
    );

    evaluateNotOperators(expression);
  }
}

function evaluateAndOperators(expression: string[]): void {
  let evaluatedExpression;
  const andOperatorIndex = expression.indexOf("AND");

  if (andOperatorIndex >= 0) {
    const leftSideOperand = expression[andOperatorIndex - 1] === "TRUE";
    const rightSideOperand = expression[andOperatorIndex + 1] === "TRUE";

    evaluatedExpression = leftSideOperand && rightSideOperand;

    expression.splice(
      andOperatorIndex - 1,
      3,
      evaluatedExpression.toString().toUpperCase()
    );

    evaluateAndOperators(expression);
  }
}

function evaluateOrOperators(expression: string[]): void {
  let evaluatedExpression;
  const orOperatorIndex = expression.indexOf("OR");

  if (orOperatorIndex >= 0) {
    console.log(expression);
    const leftSideOperand = expression[orOperatorIndex - 1] === "TRUE";
    const rightSideOperand = expression[orOperatorIndex + 1] === "TRUE";

    evaluatedExpression = leftSideOperand || rightSideOperand;

    expression.splice(
      orOperatorIndex - 1,
      3,
      evaluatedExpression.toString().toUpperCase()
    );

    evaluateOrOperators(expression);
  }
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
      evaluateNotOperators(splitExpression);
      evaluateAndOperators(splitExpression);
      evaluateOrOperators(splitExpression);

      if (splitExpression.length > 1) throw new Error(ERROR_MSG);

      return convertExpressionToBoolean(splitExpression);
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
