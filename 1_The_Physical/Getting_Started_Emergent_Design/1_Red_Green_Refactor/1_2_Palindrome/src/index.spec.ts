import { PalindromeChecker } from "./index";

describe("palindrome checker", () => {
  test('should be able to tell that "mom" or "wow" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();

    expect(palindromeChecker.isAPalindrome("mom")).toBeTruthy();
  });

  test('should be able to tell that "bill" is not a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();

    expect(palindromeChecker.isAPalindrome("bill")).toBeFalsy();
  });
});
