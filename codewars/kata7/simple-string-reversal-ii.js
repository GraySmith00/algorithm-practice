// In this Kata, you will be given a string and two indexes. Your task is to reverse the portion of that string between those two indices inclusive.

// solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
// solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.

// Input will be lowercase and uppercase letters only.

// function solve(st, a, b) {
//   const range = st.slice(a, b + 1 || st.length);
//   let newRange = '';
//   for (let i = range.length - 1; i >= 0; i--) {
//     newRange += range[i];
//   }

//   return st.slice(0, a) + newRange + st.slice(b + 1 || st.length);
// }

const solve = (string, a, b) =>
  string.slice(0, a) +
  string
    .slice(a, b + 1)
    .split('')
    .reverse()
    .join('') +
  string.slice(b + 1);

console.log(solve('codewars', 1, 5)); // "cawedors";
// solve('codingIsFun', 2, 100); //"conuFsIgnid"
// solve('FunctionalProgramming', 2, 15); //"FuargorPlanoitcnmming"
// solve('abcdefghijklmnopqrstuvwxyz', 0, 20); //"utsrqponmlkjihgfedcbavwxyz"
// solve('abcdefghijklmnopqrstuvwxyz', 5, 20); //"abcdeutsrqponmlkjihgfvwxyz"
