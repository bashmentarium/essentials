import { PalindromeChecker } from "./index";

describe("palindrome checker", () => {
  test('should be able to tell that "mom" is a palindrome', () => {
    const palindromeChecker = new PalindromeChecker();

    expect(palindromeChecker.isAPalindrome("mom")).toBeTruthy();
  });
});
