// https://leetcode.com/problems/to-lower-case/

var toLowerCase = function(str) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  return str
    .split('')
    .map(char => {
      if (upper.includes(char)) {
        const index = upper.indexOf(char);
        return lower[index];
      }
      return char;
    })
    .join('');
};
