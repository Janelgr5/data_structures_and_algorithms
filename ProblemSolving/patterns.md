### Problem Solving Patterns

## Frequency Counter

1. Uses objects or sets to collect values/frequencies of values in some linear structure like an array or string.
   1. Can compare that object to another object
2. This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.
3. Use anytime you have multiple pieces of data and you need to compare them.

# Example: Anagrams

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name forme by rearranging the letters to another, such as _cinema_, formed from _iceman_.

```
function validAnagram(firstStr, secondStr){
  let firstStrCount = {};
  let secondStrCount = {};

  if(firstStr.length !== secondStr.length){
    return false;
  }

  for(let element of firstStr){
    firstStrCount[element] = (firstStrCount[element] || 0) + 1;
  }
  for (let element of secondStr){
    secondStrCount[element] = (secondStrCount[element] || 0) + 1;
  }

  for(let key in firstStrCount){
    if(firstStrCount[key] !== secondStrCount[key]){
      return false;
    }
  }
  return true;
}
```
