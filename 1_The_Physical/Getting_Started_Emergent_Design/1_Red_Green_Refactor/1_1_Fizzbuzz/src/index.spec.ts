import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });
});
