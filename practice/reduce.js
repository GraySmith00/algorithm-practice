function reduce(arr, cb, initVal) {
  let newVal = initVal;
  for (let i = 0; i < arr.length; i++) {
    newVal = cb(newVal, arr[i]);
  }
  return newVal;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10
