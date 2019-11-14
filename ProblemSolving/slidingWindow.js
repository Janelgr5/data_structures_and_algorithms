// maxSubarraySum

// Given an array of integers and a Number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original Array.  In the first example below, [100, 200, 300] is a subarray of the original array but [100, 300] isn't.

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) {
    return null;
  }

  // create window
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // create sliding window
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);

  }

  return maxSum;
}

maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([2, 3], 3); // null

// minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.  if there isn't one, return 0 instead.

function minSubArrayLen(arr, num) {
  let sum = 0; // YES variable to hold the sum of the subArray that will be compared to num
  let start = 0; // YES variable to hold the start of the window
  let end = 0; // YES variable to hold the end of the window
  let minLength = arr.length; // YES variable to hold the minimum length

  // X while the start of the window is not at the end of the Array...
  while (start < arr.length) {
    // X if the sum of the subArray is less than the num and the end of the window is not at the end of the Array...
    if (sum < num && end < arr.length) {
      // X add the element at the end of the window to the sum and,
      sum += arr[end];
      // X increase the index of the end of the window to the next index
      end++;
    }
    // YES if the sum of the subArray is greater than or equal to the number...
    else if (sum >= num) {
      //shrink the window by first determining which is the shorter window (the array passed in or the end minus the start)
      minLength = Math.min(minLength, end - start);
      // subtract the element at the beginning of the array
      sum -= arr[start];
      //move the start of the window up by one.
      start++;
    }
    //if we reach the end, but the sum still is not at least equal to the number, then break the while loop.
    else {
      break;
    }
  }
  return minLength === arr.length ? 0 : minLength;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 [4, 3]
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 [5, 4]
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 [62]
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen()

// findLongestSubString
// Write a function called findLongestSubString, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
  // DO NOT NEED
  // keep track of length of current subString
  // let tempLength = 0;

  // YES keep track of longest subString
  let longest = 0;

  // YES start of sliding window
  let start = 0;

  // DO NOT NEED
  // end of sliding window
  // let end = 0;

  // object to keep track of which unique character was seen and when
  let seen = {};

  // DO NOT NEED
  // handle edge case where array has less than 2 elements
  // if (str.length < 2) return str.length;

  //SHOULD USE FOR LOOP INSTEAD OF WHILE LOOP
  // while (end < str.length) {
  //   // increase window when the end val isn't the same as the next val and add 1 to longest
  //   if (!seen[str[end]]) {
  //     seen[str[end]] = 1;
  //     end++;
  //     tempLength++;
  //   }
  //   // slide window when the end val is the same as the next val, and reset longest to 1
  //   else if (seen[str[end]]) {
  //     if (longest < tempLength) {
  //       longest = tempLength;
  //     }
  //     tempLength = 0;
  //     start = end;
  //     seen = {};
  //   }
  // }

  for (let i = 0; i < str.length; i++) {
    // store the current char in a variable
    let char = str[i];
    // we only hit this check when we have a repeat char
    if (seen[char]) {
      // if it is in the seen, set start to the largest value (either the current start value or the value stored at seen[char])
      start = Math.max(start, seen[char]);
    }
    // if the current index minus the start of the substring plus one (to keep the current count) is larger than the current value of longest then change the value to i - start + 1
    longest = Math.max(longest, i - start + 1);
    // add one to the current key
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('abdefg'); // 7

/* seen object looks like this when done:
{
  r: 1,
  i: 2,
  t: 3,
  h: 4,
  m: 5,
  s: 6,
  c: 7,
  o: 9, // no 8 because saw h again before getting to this char;
  l: 11 // no 10 because saw o again before getting to this char;
}
*/
