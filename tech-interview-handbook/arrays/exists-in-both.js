// Given 2 separate arrays, write a method to find the values that exist in both arrays and return them. (Solution)

// function inBoth(arr1, arr2) {
//   return arr1.filter(n => {
//     return arr2.includes(n);
//   });
// }

function inBoth(arr1, arr2) {
  const c1 = counts(arr1);
  const c2 = counts(arr2);
  return arr1.filter(n => c2[n.toString()]);
}

function counts(arr) {
  return arr.reduce((c, el) => {
    c[el] = c[el] + 1 || 1;
    return c;
  }, {});
}

console.log(inBoth([2, 4, 6], [1, 2, 3, 6]));
