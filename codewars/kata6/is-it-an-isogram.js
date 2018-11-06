// An isogram (also known as a "nonpattern word") is a logological term for a word or phrase without a repeating letter. It is also used by some to mean a word or phrase in which each letter appears the same number of times, not necessarily just once.

// You task is to write a method isogram? that takes a string argument and returns true if the string has the properties of being an isogram and false otherwise. Anything that is not a string is not an isogram (ints, nils, etc.)

// Properties:

// must be a string
// cannot be nil or empty
// each letter appears the same number of times (not necessarily just once)
// letter case is not important (= case insensitive)
// non-letter characters (e.g. hyphens) should be ignored

// ===========================================================

// function isIsogram(str){
//   const strObj = str.split('').reduce((obj, letter) => {
//     if (obj.hasOwnProperty(letter)) {
//       obj[letter] += 1;
//     } else {
//       obj[letter] = 1;
//     }
//     return obj;
//   }, {})
//   const repeatVals = Object.keys(strObj).filter(prop => strObj[prop] > 1);
//   return repeatVals.length === 0;
// }

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

isIsogram('Dermatoglyphics');
