export function fizzBuzz(number: number) {
  if (number <= 100 && number >= 1) {
    if (number % 3 === 0) {
      return "Fizz";
    } else {
      return number.toString();
    }
  }
}
