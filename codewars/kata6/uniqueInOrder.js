// https://www.codewars.com/kata/unique-in-order/train/javascript

// function uniqueInOrder(iterable) {
//   if (!iterable.length) return [];
//   const results = [iterable[0]]
//   for (let i = 1; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i - 1]) {
//       results.push(iterable[i])
//     }
//   }
//   return results;
// }

var uniqueInOrder = function(iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

uniqueInOrder('AAAABBBCCDAABBB'); // == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         // == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       // == [1,2,3]
