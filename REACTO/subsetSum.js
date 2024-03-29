// Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.

// NAIVE SOLUTION: Nested for loops, On^2
const subsetSum = (target, arr) => {
  let tempSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

  }
}
subsetSum(2, [1, 10, 5, 3]); // false
subsetSum(10, [1, 10, 5, 3]); // true
subsetSum(9, [1, 10, 5, 3]); // true
subsetSum(19, [1, 10, 5, 3]); // true
subsetSum(17, [1, 10, 5, 3]); // false
