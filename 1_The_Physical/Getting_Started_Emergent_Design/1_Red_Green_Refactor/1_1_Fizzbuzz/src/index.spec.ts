import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("returns a string", () => {
    expect(typeof fizzBuzz(5)).toBe("string");
  });

  test("takes a number from 1 to 100 as an argument and outputs it as a string", () => {
    expect(fizzBuzz(11)).toBe("11");
    expect(fizzBuzz(0)).toBe(undefined);
    expect(fizzBuzz(-5)).toBe(undefined);
    expect(fizzBuzz(101)).toBe(undefined);
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
