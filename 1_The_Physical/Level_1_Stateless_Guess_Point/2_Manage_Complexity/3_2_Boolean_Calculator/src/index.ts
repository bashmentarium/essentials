const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];
const ERROR_MSG = "Invalid Boolean expression!";

const validate = (text: string) => {
  const isExpressionValid = text.split(" ").every((expression: string) => {
    return validValues.indexOf(expression) >= 0;
  });

  if (isExpressionValid) {
    return true;
  } else {
    throw new Error(ERROR_MSG);
  }
};

export class BooleanCalculator {
  public evaluate(text: string) {
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

    return validate(text);
  }
}
