// https://www.codewars.com/kata/duplicate-encoder/train/javascript

// function duplicateEncode(word){
//     const str = word.toLowerCase();
//     const counts = str.split('').reduce((counts, char) => {
//       counts[char] = counts[char] + 1 || 1;
//       return counts;
//     }, {})

//     return str.split('').map(char => {
//       return counts[char] > 1 ? ')' : '('
//     }).join('')
// }

// function duplicateEncode(word) {
//   return word.toLowerCase().split('').map((c, i, a) => {
//     return a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')'
//   }).join('')
// }

function duplicateEncode(word) {
  const str = word.toLowerCase();
  return str.replace(/./g, c =>
    word.indexOf(c) === word.lastIndexOf(c) ? '(' : ')'
  );
}

duplicateEncode('din'); // "(((");
duplicateEncode('recede'); // "()()()");
duplicateEncode('Success'); // ")())())" "should ignore case");
duplicateEncode('(( @'); // "))((");
