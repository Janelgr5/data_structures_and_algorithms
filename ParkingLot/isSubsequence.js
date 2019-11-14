// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.  In other words, the function should check whether the characters in the first string appears somewhere in the second string, without their order changing.

// HINTS:
// 1. use multiple pointers
// 2. iterative and recursive solutions



console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
