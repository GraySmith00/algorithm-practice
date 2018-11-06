// var longestCommonPrefix = function(strs) {
//   if (!strs.length) return '';
//   let prefix = '';
//   const wordArr = strs[0].split('');
//   wordArr.map((char, i) => {
//     const found = strs.every(word => char === word[i]);
//     if (found && prefix.length === i) prefix += char;
//   });
//   return prefix;
// };

var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  // prefix starts as the entire first word
  let prefix = strs[0];

  // loop through all the rest of the words
  for (let i = 0; i < strs.length; i++) {
    // while the prefix does not match the beginning of the word
    while (strs[i].indexOf(prefix) !== 0) {
      // reduce the prefix by one character
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};
