export const ERROR_MSG = "Invalid Boolean expression!";
const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR", "(", ")"];

const flattenExpression = (expression: string[]) => {
  return expression
    .flatMap((value) => value.split(/([()])/))
    .filter((character) => character !== "");
};

function evaluateNotOperators(expression: string[]): void {
  let evaluatedExpression;
  const notOperatorIndex = expression.lastIndexOf("NOT");

  if (notOperatorIndex >= 0) {
    if (
      expression[notOperatorIndex + 1] !== "TRUE" &&
      expression[notOperatorIndex + 1] !== "FALSE" &&
      expression[notOperatorIndex + 1] !== "NOT" &&
      expression[notOperatorIndex + 1] !== "NOT(" &&
      expression[notOperatorIndex + 1] !== "(NOT" &&
      expression[notOperatorIndex + 1] !== "(TRUE" &&
      expression[notOperatorIndex + 1] !== "(FALSE" &&
      expression[notOperatorIndex + 1] !== "TRUE)" &&
      expression[notOperatorIndex + 1] !== "FALSE)"
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

function checkParenthesesValidity(expression: string[]): boolean {
  const stack: string[] = [];
  for (const s of expression) {
    if (s.startsWith("(")) {
      stack.push(s);
    } else if (s.endsWith(")")) {
      if (!stack.length) {
        return false;
      }
      stack.pop();
    } else if (s.includes("(") || s.includes(")")) {
      return false;
    }
  }

  return !stack.length;
}

const recursivelyResolveParenthesys = (expression: string[]): string[] => {
  let evaluatedParentheses = [""];
  const openParenthesesIndex = expression.lastIndexOf("(");
  if (openParenthesesIndex >= 0) {
    const closeParenthesesIndex = expression.indexOf(")", openParenthesesIndex);

    evaluatedParentheses = expression.slice(
      openParenthesesIndex + 1,
      closeParenthesesIndex
    );

    evaluateNotOperators(evaluatedParentheses);
    evaluateAndOperators(evaluatedParentheses);
    evaluateOrOperators(evaluatedParentheses);

    expression.splice(
      openParenthesesIndex,
      closeParenthesesIndex - openParenthesesIndex + 1,
      ...evaluatedParentheses
    );

    if (expression.indexOf("(") >= 0 && expression.indexOf(")") >= 0) {
      recursivelyResolveParenthesys(evaluatedParentheses);
    } else {
      evaluateNotOperators(expression);
      evaluateAndOperators(expression);
      evaluateOrOperators(expression);
    }
  }

  return expression;
};

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

    let expression = flattenExpression(text.trim().split(" "));
    const firstExpressionItem = expression[0];
    const lastExpressionItem = expression[expression.length - 1];

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

    const isExpressionValid: boolean = expression.every(
      (expression: string) => {
        return validValues.indexOf(expression) >= 0;
      }
    );

    if (isExpressionValid) {
      if (checkParenthesesValidity(expression)) {
        expression = recursivelyResolveParenthesys(expression);
      } else {
        throw new Error(ERROR_MSG);
      }

      evaluateNotOperators(expression);
      evaluateAndOperators(expression);
      evaluateOrOperators(expression);

      // Invalid expression that doesn't resolve to a single boolean value
      if (expression.length > 1) throw new Error(ERROR_MSG);

      return convertExpressionToBoolean(expression);
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
