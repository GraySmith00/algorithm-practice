function filter(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i]) === true) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(filter([1, 2, 3, 4], n => n < 3)); // [1, 2]
