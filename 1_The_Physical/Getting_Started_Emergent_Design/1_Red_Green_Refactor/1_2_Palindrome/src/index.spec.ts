import { PalindromeChecker } from "./index";

describe("palindrome checker", () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  test('should be able to tell that "mom" or "wow" is a palindrome', () => {
    expect(palindromeChecker.isAPalindrome("mom")).toBeTruthy();
  });

  test('should be able to tell that "bill" is not a palindrome', () => {
    expect(palindromeChecker.isAPalindrome("bill")).toBeFalsy();
  });

  test("should be able to tell if palindrome regardless of the casing", () => {
    expect(palindromeChecker.isAPalindrome("Mom")).toBeTruthy();
  });

  test("should be able to tell a palindrome regardless of spacings", () => {
    expect(palindromeChecker.isAPalindrome("Was It A Rat I Saw")).toBeTruthy();
    expect(palindromeChecker.isAPalindrome("Never Odd or Even")).toBeTruthy();
  });
});
