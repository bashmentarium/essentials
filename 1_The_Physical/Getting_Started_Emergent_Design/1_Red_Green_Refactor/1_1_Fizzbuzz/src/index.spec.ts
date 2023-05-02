import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  it("doesnt accept numbers less than 1", () => {
    expect(() => fizzBuzz(0)).toThrow("Too small!");
  });

  it("doesnt accept numbers greater than 100", () => {
    expect(() => fizzBuzz(101)).toThrow("Too large!");
  });

  test("outputs numbers as strings", () => {
    expect(fizzBuzz(11)).toBe("11");
  });

  test("returns 'Fizz' if input number is a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(7)).toBe("7");
  });

  test("returns 'Buzz' if input number is a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  test("returns 'FizzBuzz' if input number is a multiple of both 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
});
