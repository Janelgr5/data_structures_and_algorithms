# Prompt

Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.

# Examples

```js
subsetSum(2, [1, 10, 5, 3]); // false
subsetSum(10, [1, 10, 5, 3]); // true
subsetSum(9, [1, 10, 5, 3]); // true
subsetSum(19, [1, 10, 5, 3]); // true
subsetSum(17, [1, 10, 5, 3]); // false
```

# Solutions

## Some Background
Dynamic Programming: A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions.

If we look at the above definition it's very similar to recursion: we take a complex problem and we break it down to 2 (or more) subproblems - the base case and the recursive case.  Yet now we take the extra step of storing the results of the subproblems (in an object, array, Set) ONLY IF it hasn't been solved and stored before.  This reduces the amount of time and space that our function takes to execute.

### Naive - Iterative Approach (with Array or Set Data Structure)
This approach uses a nested for loop to calculate each possible sum, check to see if the possible sum to the target to see if it's equal (return true), less than the target (add sum to array or set), or we reach the end of the outer loop and return false (since there are no possible sums).

```js
function subsetSum(target, arr) {
  // store all the possible sums
  let sums = [0];
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // make a copy of the sums array to loop through because we'll be mutating the sums array which will then change the value of sumsCopy.length
    let sumsCopy = [...sums];
    // loop through the copy of the sums array
    for (let j = 0; j < sumsCopy.length; j++) {
      // this inner loop allows us to calculate all of the possible sums
      let possibleSum = sumsCopy[j] + arr[i];
      if (possibleSum === target) return true;
      else if (possibleSum < target) sums.push(newSum);
    }
  }
  return false;
}
```
Same approach using the ES6 data structure Set: http://exploringjs.com/es6/ch_maps-sets.html#sec_set

```js

function subsetSum(target, nums) {
  // initialize possible sums to just a set containing 0
  const possibleSums = new Set([0]);
  for (const num of nums) {
    // copy the current set of possibilities so that we loop down it without the set changing right from under our feet
    const currentPossibleSums = new Set(possibleSums);
    for (const sum of currentPossibleSums) {
      // add each possible sum to each number in the original array of numbers
      const possibleSum = sum + num;
      // if it matches the target we're done!
      if (possibleSum === target) return true;
      // otherwise, add it to the set of possibilities (as long as it's less than the target)
      if (possibleSum < target) possibleSums.add(newSum);
    }
  }
  // if we get here that means we've exhausted all possible sums less than the target and have found nothing
  return false;
}
```
### Naive - Recursive Approach
If the interviewee decides to take the naive approach, encourage them to solve it recursively. This will set them up to refactor their code to the optimized implementation once you explain it to them. Remember the recursive approach breaks our problem down into subproblems - the base case(s) and the recursive case(s).

```js
function subsetSum(target, arr, idx = 0) {
  // if we've hit 0 we're done!
  if (target === 0) return true;
  // stop trying and return false if the target is negative OR if we've reached the end of the array
  if (target < 0 || idx === arr.length) return false;
  const currentNum = arr[idx];
  // capture the boolean result for the possibility of EXCLUDING the current number from the sum
  // recursively try with the same target, but continue onto the next index
  const whenExcluded = subsetSum(target, nums, idx + 1);
  // capture the boolean result for the possibility of INCLUDING the current number in the sum
  // recursively try with the target minus this number and continue onto the next index
  const whenIncluded = subsetSum(target - num, nums, idx + 1);
  // return whether either possibility came back true
  return whenExcluded || whenIncluded;
}
```

### Optimized - Memoization Approach
#### What is Memoization?
A **top down** approach Storing the results of expensive function calls and returning the cached result when the same inputs occur again.

Expensive function call: one that takes a lot of time and/or memory to execute.

Cache: a temporary data store that serves data up faster in future requests.

Memoization uses:
1. higher order functions
2. closure

If we input the same value in our memoized function, it returns the value stored in the cache. This lowers a functions time cost in exchange for space cost.

To solve using memoization, ask yourself:
1. What are the inputs? outputs?
2. What is the base case(s)?
3. What is the recursive case(s)? THIS IS WHAT YOU MEMOIZE!!!

```js
// initialize the index to 0 and the memoized results to an empty object
function subsetSum(target, nums, idx = 0, memo = {}) {
  // if we've seen this target and already solved for it, return the answer right away
  if (memo.hasOwnProperty(target)) return memo[target];
  // if we've hit 0 we're done!
  if (target === 0) return true;
  // stop trying and return false if the target is negative OR if we've reached the end of the array
  if (target < 0 || idx === nums.length) return false;
  const num = nums[idx];

  // TIME TO MEMOIZE!!!
  // capture the boolean result for the possibility of *excluding* the current number from the sum
  // recursively try with the same target, but continue onto the next index
  const whenExcluded = subsetSum(target, nums, idx + 1, memo);
  // capture the boolean result for the possibility of *including* the current number in the sum
  // recursively try with the target minus this number and continue onto the next index
  const whenIncluded = subsetSum(target - num, nums, idx + 1, memo);
  // determine whether either possibility came back true
  const result = whenExcluded || whenIncluded;
  // cache this answer, associating it with this particular target
  memo[target] = result;
  return result;
}
```
#### A Functional Approach
We can create a helper function that will memoize the passed in function!
```js
// HELPER FUNCTION
function memoizer(func){
    let cache = {}
    return function (n){
        if (cache[n] != undefined ) {
          return cache[n]
        } else {
          let result = func(n)
          cache[n] = result
          return result
        }
    }
}

// NAIVE SOLUTION
// Now you can memoize the naive solution!
const subsetSumMemoized = memoize(subSetSum);

// Now you can call this new memoized version of the function (this is actually faster than our optimized approach)!
subsetSumMemoized(target, arr);
```
