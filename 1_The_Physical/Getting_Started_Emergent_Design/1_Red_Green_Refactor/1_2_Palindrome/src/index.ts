export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    const reversed = str.split("").reverse().join("");

    return (
      reversed.toLowerCase().replace(/\s+/g, "") ===
      str.toLowerCase().replace(/\s+/g, "")
    );
  }
}
