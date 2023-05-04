export class BooleanCalculator {
  public evaluate(text: string) {
    if (
      text.indexOf("NOT") === -1 &&
      text.indexOf("AND") === -1 &&
      text.indexOf("OR") === -1
    ) {
      throw new Error("Invalid Boolean expression!");
    }

    return null;
  }
}
