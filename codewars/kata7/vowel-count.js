// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   return str.split('').reduce((totalVowels, letter) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(letter)) {
//       return (totalVowels += 1);
//     }
//     return totalVowels;
//   }, 0);
// }

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

console.log(getCount('hey bros my name is gray'));
