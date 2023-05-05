const validValues = ["TRUE", "FALSE", "NOT", "AND", "OR"];
export const ERROR_MSG = "Invalid Boolean expression!";

export class BooleanCalculator {
  public evaluate(text: string): boolean | string {
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

    const isExpressionValid: boolean = text
      .split(" ")
      .every((expression: string) => {
        return validValues.indexOf(expression) >= 0;
      });

    if (isExpressionValid) {
      return true;
    } else {
      throw new Error(ERROR_MSG);
    }
  }
}
