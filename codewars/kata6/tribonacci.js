// https://www.codewars.com/kata/tribonacci-sequence/train/javascript

function slowTrib(signature, n) {
  if (n === 0) return [];
  if (n <= 3) return signature.slice(0, n);

  const prev = tribonacci(signature, n - 1);
  const num =
    prev[prev.length - 1] + prev[prev.length - 2] + prev[prev.length - 3];
  return [...prev, num];
}

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];
    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}

const tribonacci = memoize(slowTrib);

// function tribonacci(signature, n) {
//   const results = [...signature]
//   for (let i = 3; i < n; i++) {
//     results.push(results[i - 3] + results[i - 2] + results[i - 1])
//   }
//   return results;
// }

tribonacci([1, 1, 1], 10); // [1,1,1,3,5,9,17,31,57,105])
// tribonacci([0,0,1],10) // [0,0,1,1,2,4,7,13,24,44])
// tribonacci([0,1,1],10) // [0,1,1,2,4,7,13,24,44,81])
