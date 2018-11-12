// https://leetcode.com/problems/hamming-distance/

var hammingDistance = function(x, y) {
  let binX = x.toString(2);
  let binY = y.toString(2);
  const addZeros = Math.abs(binY.length - binX.length);

  if (x < y) {
    binX = '0'.repeat(addZeros) + binX;
  } else {
    binY = '0'.repeat(addZeros) + binY;
  }

  let count = 0;
  for (let i = 0; i < binX.length; i++) {
    if (binX[i] !== binY[i]) {
      count++;
    }
  }
  return count;
};

hammingDistance(1, 4); // 2
