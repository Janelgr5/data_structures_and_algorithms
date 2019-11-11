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
