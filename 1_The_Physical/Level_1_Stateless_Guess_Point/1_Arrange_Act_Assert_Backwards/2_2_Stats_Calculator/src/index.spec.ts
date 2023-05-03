import statsCalculator from "./index";

describe("stats calculator", () => {
  test('returns "minimumValue", "maximumValue", "numbersCount", "averageValue"', () => {
    const response = statsCalculator([25, 14, 2, -111, 78, 10]);

    expect(response.minimum).toBeDefined();
    expect(response.maximum).toBeDefined();
    expect(response.average).toBeDefined();
    expect(response.average).toBeDefined();
  });

  test("knows that -3 is the minimum value for the sequence [12, 54, 2, -3, 12, 12]", () => {
    const response = statsCalculator([12, 54, 2, -3, 12, 12]);

    expect(response.minimum).toBe(-3);
  });

  test("knows that 20 is the minimum value for the sequence [90, 50, 20, 100, 30, 40]", () => {
    const response = statsCalculator([90, 50, 20, 100, 30, 40]);

    expect(response.minimum).toBe(20);
  });

  test("knows that 87 is the maximum value for the sequence [-45, 87, 11, 50, 34, 5]", () => {
    const response = statsCalculator([-45, 87, 11, 50, 34, 5]);

    expect(response.maximum).toBe(87);
  });

  test("knows that 4 is the maximum value for the sequence [-45, 4, -11, -50, -34, -5]", () => {
    const response = statsCalculator([-45, 4, -11, -50, -34, -5]);

    expect(response.maximum).toBe(4);
  });

  test("knows the length of the sequence", () => {
    const response = statsCalculator([22, 4, -11, 90, -34, 1]);

    expect(response.count).toBe(6);
  });

  test("knows the average of the elements of the sequence", () => {
    const response = statsCalculator([10, 4, 11, 90, 34, 1]);

    expect(response.average).toBe(25);
  });
});
