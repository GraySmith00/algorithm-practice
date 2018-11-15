// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   const counts = str.split('').reduce((counts, char) => {
//     if (!counts[char]) counts[char] = 0;
//     counts[char]++;
//     return counts;
//   }, {});

//   return Object.keys(counts).reduce((maxChar, key, i) => {
//     if (i === 0 || counts[key] > counts[maxChar]) maxChar = key;
//     return maxChar;
//   }, '');
// }

function maxChar(str) {
  const counts = {};
  let maxVal = 0;
  let maxChar = '';

  for (let char of str) {
    counts[char] = counts[char] + 1 || 1;
  }

  for (let key in counts) {
    if (counts[key] > maxVal) {
      maxVal = counts[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
