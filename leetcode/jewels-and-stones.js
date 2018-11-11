// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(J, S) {
  return S.split('').filter(stone => J.includes(stone)).length;
};
