// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

// function getMiddle(s) {
//   const arr = s.split('');
//   if (arr.length % 2) {
//     return arr[Math.floor(arr.length / 2)];
//   }
//   return arr[arr.length/2 -1] + arr[arr.length/2];
// }

function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

console.log(getMiddle('testing'));
