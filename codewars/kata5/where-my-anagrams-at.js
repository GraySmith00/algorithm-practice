// https://www.codewars.com/kata/where-my-anagrams-at/train/javascript

// function anagrams(s, woword === s.split('').sort().join('')rds) {
//   const wordCounts = getCounts(word);

//   const final = words.filter(str => {
//     if (word.length !== str.length) return false;
//     let result = true;
//     let strCounts = getCounts(str)
//     for (let key in wordCounts) {
//       if (wordCounts[key] !== strCounts[key]) {
//         result = false;
//       }
//     }
//     return result;
//   })

//   return final;
// }

// const getCounts = word => {
//   return word.split('').reduce((wordCounts, char) => {
//     wordCounts[char] = wordCounts[char] + 1 || 1;
//     return wordCounts
//   }, {})
// }

function anagrams(word, words) {
  word = word
    .split('')
    .sort()
    .join('');
  return words.filter(
    s =>
      word ===
      s
        .split('')
        .sort()
        .join('')
  );
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
