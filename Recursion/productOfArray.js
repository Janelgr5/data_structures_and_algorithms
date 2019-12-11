// Write a function called productOfArray which takes an array of numbers and returns the product of them all.

let productOfArray = arrOfNums => {
  let product = arrOfNums[0];
  if (arrOfNums.length === 1) return product;
  return product *= productOfArray(arrOfNums.slice(1))
}
