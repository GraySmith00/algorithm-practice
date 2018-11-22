// ================================================================
// find out whether a number is prime
// ================================================================
const isPrime = n => {
  if (n % 2 === 0 || n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(179430413));

// ================================================================
// find the second highest number in an array
// ================================================================
const nums = [2, 4, 24, 6, 8, 19, 22, 31, 4, 6, 12];

// const secondHighest = arr => {
//   return arr.sort((a, b) => b - a)[1];
// };

// without sorting
const secondHighest = arr => {
  const top = { first: 0, second: 0 };
  for (let num of arr) {
    if (num > top.first) {
      top.second = top.first;
      top.first = num;
    } else if (num < top.first && num > top.second) {
      top.second = num;
    }
  }
  return top.second;
};

console.log(secondHighest(nums));

// ================================================================
// find the most frequently occuring string in an array
// ================================================================
const strings = [
  'the',
  'puppy',
  'was',
  'a',
  'very',
  'cute',
  'puppy',
  'puppy',
  'cute'
];

const getMostFrequent = arr => {
  let maxNum = 0;
  let mostFreq = '';
  arr.reduce((counts, str) => {
    counts[str] = counts[str] + 1 || 1;
    if (counts[str] > maxNum) {
      maxNum = counts[str];
      mostFreq = str;
    }
    return counts;
  }, {});
  return mostFreq;
};

console.log(getMostFrequent(strings));

// ================================================================
// greatest common divisor of two nums
// ================================================================
const getCommonDivisor = (n1, n2) => {
  const highest = Math.max(n1, n2);
  let divisor = 1;

  for (let i = 0; i < highest; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

console.log(getCommonDivisor(50, 65));

// ================================================================
// return fibonacci seq at nth num
// ================================================================
// const fib = n => {
//   const seq = [0, 1];
//   if (n < 2) return [0, 1];
//   for (let i = 2; i <= n; i++) {
//     seq.push(seq[i - 1] + seq[i - 2]);
//   }
//   return seq;
// };

const slowFib = n => {
  if (n < 2) return [0, 1];
  const prev = fib(n - 1);
  const num = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, num];
};

const memoize = fn => {
  const cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];

    cache[args] = fn.apply(this, args);
    return cache[args];
  };
};

const fib = memoize(slowFib);

console.log(fib(50));

// ================================================================
// find n factorial
// ================================================================
// const slowFactorial = n => {
//   if (n < 2) return 1;
//   return n * factorial(n - 1);
// };

// const memoize = fn => {
//   const cache = {};

//   return function(...args) {
//     if (cache[args]) return cache[args];
//     cache[args] = fn.apply(this, args);
//     return cache[args];
//   };
// };

// const factorial = memoize(slowFactorial);

// console.log(factorial(4));

// ================================================================
// remove duplicates from an array
// ================================================================
const nums2 = [1, 4, 5, 3, 6, 3, 7, 4, 'three', 3, 5, 7, 8, 9];

const removeDups = arr => {
  const counts = arr.reduce((counts, el) => {
    counts[el] = counts[el] + 1 || 1;
    return counts;
  }, {});

  return Object.keys(counts).map(val => parseInt(val) || val);
};

console.log(removeDups(nums2));

// ================================================================
// reverse a string
// ================================================================
// const revStr = str => {
//   let newStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// };

const revStr = str => {
  return str.split('').reduce((newStr, char) => char + newStr, '');
};

console.log(revStr('thanksgiving'));

// ================================================================
// Matrix
// ================================================================
const matrix = n => {
  const result = [];
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
  }

  return result;
};

console.log(matrix(3));
