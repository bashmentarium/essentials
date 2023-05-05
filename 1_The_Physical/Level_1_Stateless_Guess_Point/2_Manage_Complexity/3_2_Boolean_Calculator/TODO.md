- takes in a boolean expression as a string
- has 3 operators: NOT, AND, OR
- returns a boolean value (true, false)
- any provided combination should be evaluated
- invalid expressions should be rejected with an error
- the expression should be evaluated with precedence:
  - NOT
  - AND
  - OR
- take parenthesis into consideration (highest precedence)
- if valid, compares only betweet TRUE and FALSE values.

- find order of operands and operators in order to validate expressions for evaluation

// To compute a boolean expression

Make validation on the creating pairs step:
AND, OR, can have only TRUE OR FALSE
NOT cannot be last and can have only a TRU OR FALSE in front of it

1. Find index of logical operator with the highest priority
2. Compute it alongside the next value
3. Find index of logical operator with 1 step lower priority
4. Compute it alongside the next and the previous value
5. Loop through the array and compute every operation in order
6. If anything different from this algorithm - throw Error.

// Adapt for parenthesis
