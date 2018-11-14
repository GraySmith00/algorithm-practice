// https://leetcode.com/problems/self-dividing-numbers/

var selfDividingNumbers = function(left, right) {
  const selfDividers = [];
  for (let i = left; i <= right; i++) {
    const numArr = i.toString().split('');
    const selfDivider = numArr.every(numStr => {
      const num = parseInt(numStr);
      return i % num === 0;
    });
    if (selfDivider) selfDividers.push(i);
  }
  return selfDividers;
};
