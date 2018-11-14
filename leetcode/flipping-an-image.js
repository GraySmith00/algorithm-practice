// https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(A) {
  const flipped = [...A].map(arr => {
    return arr.reverse();
  });

  return flipped.map(arr => {
    return arr.map(num => {
      return num === 1 ? 0 : 1;
    });
  });
};
