// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// function reverse(str) {
//   let revStr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// function reverse(str) {
//   let revStr = '';
//   for (let char of str) {
//     revStr = char + revStr;
//   }
//   return revStr;
// }

function reverse(str) {
  return str.split('').reduce((revStr, char) => {
    return char + revStr;
  }, '');
}

// function reverse(str) {
//   if (!str.length) return str;
//   return reverse(str.slice(1)) + str.slice(0, 1);
// }

reverse('hello');
console.log(reverse('hello'));

module.exports = reverse;
