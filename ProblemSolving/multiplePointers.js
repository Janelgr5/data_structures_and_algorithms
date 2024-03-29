// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
  let argumentsArr = [...arguments].sort();

  for (let i = 0; i < argumentsArr.length; i++) {
    let firstElem = argumentsArr[i],
      diffElem = argumentsArr[i + 1];

    if (firstElem === diffElem) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// ONE LINER SOLUTION
function areThereDuplicatesTwo() {
  return new Set(arguments).size !== arguments.length;
}

// Write a function called averagePair.  Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.  There may be more than one pair that matches the average target.

function averagePair(numArr, target) {
  let firstPointer = 0,
    lastPointer = numArr.length - 1;

  if (numArr.length < 2) {
    return false;
  }

  while (firstPointer < lastPointer) {
    // had this line outside of the while loop. Had to place inside while loop in order for it to recalculate each iteration
    let average = (numArr[firstPointer] + numArr[lastPointer]) / 2;

    if (average < target) {
      firstPointer++;
    } else if (average > target) {
      lastPointer--;
    } else if (average === target) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.  In other words, the function should check whether the characters in the first string appears somewhere in the second string, without their order changing.

/* PARKING LOT!!!
function isSubsequence(subStr, str) {
  let subStrPointer, strPointer = 0;

  //optimize for substrings and strings that are exactly the same
  if (subStr === str) {
    return true;
  }
  if (!subStr) return true;

  while (strPointer < str.length) {

    // if the element in the subString is equal to the element in the string...
    if (subStr[subStrPointer] === str[strPointer]) {
      // check if the subStr's pointer is equal to the it's length then return true.
      if (subStrPointer === subStr.length) {
        return true;
      } else {
        // otherwise move the subStrPointer by  index
        subStrPointer++;
      }
    }
    //move the str's pointer to the next index
    strPointer++;
  }

  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
*/
