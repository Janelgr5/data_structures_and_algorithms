// Write a recursive fuction called isPalindrome which returns true if the string passed to it is a palindrome(reads the same forward and backward).Otherwise it returns false.

let isPalindrome = str => {
  let strCopy = str.slice()
  // let i = 0;
  // let j = str.length - 1;
  // BASE CASE: if the letter at the end and beginning of the string do not match return false.
  // if (strCopy[i] !== strCopy[j]) return false;
  // RECURSIVE CASE:  if the letters match and we have length, call the function on the next characters in the str
  // else if (str[i] === str[j]) {
  //   i++
  //   j--
  // }
  // if (i >= j) return true;

  for (let i = 0; i < strCopy.length / 2; i++) {
    let j = strCopy.length - 1;
    if (strCopy[i] !== strCopy[j]) return false;
    strCopy.slice(i, j);
  }
  // isPalindrome(strCopy.slice(i, j));
  return true;
}
