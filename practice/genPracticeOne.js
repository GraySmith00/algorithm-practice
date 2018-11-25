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
    // top row
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return result;
};

console.log(matrix(3));

// ================================================================
// anagrams
// ================================================================

function isAnagram(str1, str2) {
  const counts1 = getCounts(str1);
  const counts2 = getCounts(str2);

  if (Object.keys(counts1).length !== Object.keys(counts2).length) return false;
  return Object.keys(counts1).every(key => counts1[key] === counts2[key]);
}

function getCounts(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .reduce((counts, char) => {
      counts[char] = counts[char] + 1 || 1;
      return counts;
    }, {});
}

// console.log(getCounts('hi there'));
console.log(isAnagram('robot', 'tobor'));

// ================================================================
// palindrome
// ================================================================
function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome('racecars'));

// ================================================================
// chunked
// ================================================================
function chunked(arr, size) {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }
  return chunked;
}

console.log(chunked([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// ================================================================
// return second largest number in an array
// ================================================================
function secondLargest(arr) {
  const top = { first: 0, second: 0 };
  for (let num of arr) {
    if (num > top.first) {
      top.second = top.first;
      top.first = num;
    } else if (num > top.second && num < top.first) {
      top.second = num;
    }
  }

  return top.second;
}

console.log(secondLargest([2, 4, 5, 6, 8, 9, 19, 22, 9, 4, 20]));

// ================================================================
// find the most occuring letter in a string
// ================================================================
function maxLetter(str) {
  let maxChar = '';
  let maxCount = 0;

  str
    .replace(/[^\w]/g, '')
    .split('')
    .reduce((counts, char) => {
      counts[char] = counts[char] + 1 || 1;
      if (counts[char] > maxCount) {
        maxCount = counts[char];
        maxChar = char;
      }
      return counts;
    }, {});
  return maxChar;
}

console.log(maxLetter('and they hadxxx a really goooood time'));
