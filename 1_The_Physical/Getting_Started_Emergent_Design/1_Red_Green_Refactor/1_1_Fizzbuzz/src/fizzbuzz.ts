export function fizzBuzz(num: number) {
  const isMultipleOf5 = (num: number) => {
    return num % 5 === 0;
  };

  const isMultipleOf3 = (num: number) => {
    return num % 3 === 0;
  };

  if (num < 1) throw new Error("Too small!");
  if (num > 100) throw new Error("Too large!");
  if (isMultipleOf3(num) && isMultipleOf5(num)) return "FizzBuzz";
  if (isMultipleOf3(num)) return "Fizz";
  if (isMultipleOf5(num)) return "Buzz";
  return num.toString();
}
