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

  test("should be able to tell if palindrome regardless of the casing", () => {
    const palindromeChecker = new PalindromeChecker();

    expect(palindromeChecker.isAPalindrome("Mom")).toBeTruthy();
  });

  test("should be able to tell a palindrome regardless of spacings", () => {
    const palindromeChecker = new PalindromeChecker();

    expect(palindromeChecker.isAPalindrome("Was It A Rat I Saw")).toBeTruthy();
  });
});
