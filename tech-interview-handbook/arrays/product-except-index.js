// https://github.com/yangshun/tech-interview-handbook/blob/master/algorithms/array.md

// Given an array and an index, find the product of the elements of the array except the element at that index. (Solution)

function product(arr, n) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== n) result *= arr[i];
  }
  return result;
}

console.log(product([2, 4, 6], 1));
