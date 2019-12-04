# RECURSION

## What is recursion?

A process (a function) that calls itself.

## Why recursion?

1. To convert JSON to JavaScript
2. DOM traversal
3. Object traversal
4. complex data structures
5. cleaner alternative to iteration

## The Call Stack

1. In almost all program languages, there is a built in data structure that manages what happens when functions are invoked.
2. In JavaScript, that data structure is called the **Call Stack**.
3. A stack data structure
4. Any time a function is invoked it is placed (`pushed`) on the top of the call stack.
5. When JavaScript sees the return keyword or when the function ends, the compiler will remove (`pop`) the function from the top of the call stack.
6. **The Call Stack and Recursion**: When we write recursive functions, we keep pushing new (the same) functions onto the call stack.

## How Recursive Functions Work

1. **Recursive Case**: Invoke the same function with a _different input_ until you reach your base case.
2. **Base Case**: The condition when the recursion ends.

## Examples

### Countdown

```js
function countDown(num) {
  if (num === 0) {
    console.log('Countdown complete');
  } else {
    console.log(num);
    countDown(num - 1);
  }
}
```

### SumRange

```js
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

### Factorial

#### Iteratively

```js
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
```

#### Recursively

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

## Pitfalls

1. No base case --> stack overflow
2. Forgetting to return or returning the wrong thing --> stack overflow
   1. need to return to pop the function off the call stack

## Helper Method Recursion

Helpful when processing an array or some collection

### Syntax

```js
function mainFunc(input) {
  let outerScopedVariable = [];
  function helperRecursionFunc(helperInput) {
    // modify the outerScopedVariable
    helperRecursionFunc(helperInput--);
  }
  helperRecursionFunc(input);
  return outerScopedVariable;
}
```

### Example:

```js
// outer function not recursive
function collectOddValues(arr) {
  // define in outer scope.
  let oddVals = [];
  // inner function recurses
  function helperRecursionFunc(helperInput) {
    // update/modify in inner scope
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) oddVals.push(helperInput[0]);
    helperRecursionFunc(helperInput.slice(1));
  }
  helperRecursionFunc(arr);
  return oddVals;
}
```

## Pure Recursion

The recursion is part of the function.

### Example

```js
function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

### Tips

1. **Arrays**: use methods like `slice`, **the spread operator** `...array`, and `concat` that make copies of arrays so you don't mutate them.
2. **Strings**: use methods like `slice`, `substr`, or `substring` to make copies of strings, because they are immutable.
3. **Objects**: to make copies use `Object.assign` or **the spread operator**.
