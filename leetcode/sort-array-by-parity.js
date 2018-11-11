// https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function(A) {
  const even = [];
  const odd = [];

  A.forEach(num => {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  });

  return [...even, ...odd];
};
