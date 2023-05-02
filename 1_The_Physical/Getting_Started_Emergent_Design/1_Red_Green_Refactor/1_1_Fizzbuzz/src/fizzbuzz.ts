export function fizzBuzz(number: number) {
  const isInRange = number <= 100 && number >= 1;
  const isMultipleOf5 = number % 5 === 0;
  const isMultipleOf3 = number % 3 === 0;

  if (isInRange) {
    if (isMultipleOf3 && isMultipleOf5) {
      return "FizzBuzz";
    } else if (isMultipleOf3) {
      return "Fizz";
    } else if (isMultipleOf5) {
      return "Buzz";
    } else {
      return number.toString();
    }
  }
}
