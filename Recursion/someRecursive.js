// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback.
// Otherwise it returns false.

let someRecursive = (arr, callback) => {
  if (!arr.length) return false;

  if (!callback(arr[0])) return someRecursive(arr.slice(1), callback);
  return callback(arr[0]);
}
