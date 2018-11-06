/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let finalArr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && finalArr.length < 2) {
        finalArr.push(i);
        finalArr.push(j);
      }
    }
  }
  return finalArr;
};
