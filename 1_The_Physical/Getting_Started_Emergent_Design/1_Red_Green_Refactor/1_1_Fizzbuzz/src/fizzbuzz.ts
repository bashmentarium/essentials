export function fizzBuzz(number: number) {
  if (number <= 100 && number >= 1) {
    if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return number.toString();
    }
  }
}
