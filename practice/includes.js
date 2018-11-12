function includes(arr, num) {
  let included = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) included = true;
  }
  return included;
}

// console.log(includes([1, 3, 8, 10], 8)); // true
// includes([1, 3, 8, 8, 15], 15); // true
console.log(includes([1, 3, 8, 10, 15], 9)); // false
