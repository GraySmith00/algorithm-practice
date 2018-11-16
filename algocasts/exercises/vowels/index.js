// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const v = 'aeiou'.split('');
//   return str.split('').reduce((total, char) => {
//     if (v.includes(char.toLowerCase())) total++;
//     return total;
//   }, 0);
// }

// function vowels(str) {
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if ('aeiou'.includes(char)) count++;
//   }
//   return count;
// }

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
