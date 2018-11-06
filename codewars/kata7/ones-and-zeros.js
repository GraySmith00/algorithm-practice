// Given an array of one's and zero's convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

// const binaryArrayToNumber = arr => {
//   return arr.reduce((total, item, i) => {
//     if(i === 0 && item > 0) {
//       total += 8;
//     }
//     if(i === 1 && item > 0) {
//       total += 4;
//     }
//     if(i === 2 && item > 0) {
//       total += 2;
//     }
//     if(i === 3 && item > 0) {
//       total += 1;
//     }
//     return total;
//   }, 0);
// };

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

binaryArrayToNumber([0, 0, 1, 0]);
