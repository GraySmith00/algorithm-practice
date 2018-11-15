// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1

// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   function findCounts(str) {
//     return str.split('').reduce((counts, el) => {
//       counts[el] = counts[el] + 1 || 1;
//       return counts;
//     }, {});
//   }

//   const countsA = findCounts(stringA);
//   const countsB = findCounts(stringB);

//   return (
//     Object.keys(countsA).every(key => {
//       return countsA[key] === countsB[key];
//     }) && Object.keys(countsA).length === Object.keys(countsB).length
//   );
// }

// SOLUTION 2

// function anagrams(stringA, stringB) {
//   const aCharMap = charMap(stringA);
//   const bCharMap = charMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let key in aCharMap) {
//     if (aCharMap[key] !== bCharMap[key]) return false;
//   }

//   return true;
// }

// function charMap(str) {
//   const charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

// SOLUTION 3

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

console.log(anagrams('One one', 'One one c'));

module.exports = anagrams;
