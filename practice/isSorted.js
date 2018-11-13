function isSorted(arr) {
  if (!arr.length) return true;
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && arr[i] < arr[i - 1]) return false;
  }
  return true;
}

console.log(isSorted([])); // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
console.log(isSorted([3, 9, -3, 10])); // false
