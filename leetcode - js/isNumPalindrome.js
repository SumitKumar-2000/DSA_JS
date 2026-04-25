function isPalindrome(num) {
  if (num < 0) return false;

  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = parseInt(num / 10);
  }

  return original === reversed;
}