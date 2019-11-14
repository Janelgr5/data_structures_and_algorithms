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
