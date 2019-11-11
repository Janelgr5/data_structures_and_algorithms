# Problem Solving Patterns

## Frequency Counter

1. Uses objects or sets to collect values/frequencies of values in some linear structure like an array or string.
   1. Can compare that object to another object
2. This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.
3. Use anytime you have multiple pieces of data and you need to compare them.

### Example: Anagrams

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

## Multiple Pointers

1. creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
2. Usually a linear structure, and searching for a pair of values or something that meets a condition.
3. Decide which pointer to move based on the condition that determines which to move.

### Example: countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```
function countUniqueValues(arrayOfNums){
  let uniqueValCount = 0;

  //Start the uniqueValPointer at index 0
  let uniqueValPointer = 0;

  //Start the sameValPointer at index 1
  let sameValPointer = 1;

  //while the sameValPointer's index is less than the array's length
  while(sameValPointer <= arrayOfNums.length){

    //if the value at both pointers are the same, then just move the sameValPointer to the next index.
    if(arrayOfNums[uniqueValPointer] === arrayOfNums[sameValPointer]){
      sameValPointer++
    } else {
      //if the value at both pointers are different, add 1 to the uniqueValCount, Move the uniqueValPointer to the index of the SameValPointer, Move the sameValPointer up one index.
      uniqueValCount++
      uniqueValPointer = sameValPointer;
      sameValPointer = uniqueValPointer + 1;
    }
  }
  return uniqueValCount;
}
```

## The Sliding Window

1. Creating a window which can either be an array or number from one position to another
   1. Usually move it from left to right
2. Depending on a certain condition, the window either increases or closes ( and a new window is created).
3. Very useful for keeping track of a subset of data in an array/string (larger set of data), etc.
4. Define a range to keep track of, and slide it across

## Divide And Conquer

1. quick and merge sort
2. divides a data set into smaller chunks and then repeating a process with a subset of data.
3. tremendously decreases time complexity
