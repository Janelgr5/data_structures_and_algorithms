// Write a function called sameFrequency.  Given two positive integers, find out if the two numbers hae the same frequency of digits.

function sameFrequency(num1, num2) {
  // turn numbers into strings
  const num1Str = String(num1),
    num2Str = String(num2);
  // if numbers are different lengths then they do not have the same frequency, so we can return false.
  if (num1Str.length !== num2Str.length) {
    return false;
  }
  // create objects to keep track of frequency count
  let num1Obj = {},
    num2Obj = {};
  // loop through the string and create frequency count objects
  for (let i = 0; i < num1Str.length; i++) {
    if (num1Obj[num1Str[i]]) {
      num1Obj[num1Str[i]] += 1;
    } else {
      num1Obj[num1Str[i]] = 1;
    }

    if (num2Obj[num2Str[i]]) {
      num2Obj[num2Str[i]] += 1;
    } else {
      num2Obj[num2Str[i]] = 1;
    }
  }

  // loop through first object and check to see if both objects have the same Key/value pairs

  for (let key in num1Obj) {
    if (num1Obj[key] !== num2Obj[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicates() {
  let countObj = {};

  for (let element of arguments) {
    if (countObj[element]) {
      return true;
    } else {
      countObj[element] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
