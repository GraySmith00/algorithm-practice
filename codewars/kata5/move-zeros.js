// https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

// var moveZeros = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] === 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

var moveZeros = function(arr) {
  const zeros = arr.filter(num => num === 0);
  const nonZeros = arr.filter(num => num !== 0);
  return [...nonZeros, ...zeros];
};

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]); // [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
