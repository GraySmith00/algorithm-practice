// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => {
      let newStr = '';
      for (let i = word.length - 1; i >= 0; i--) {
        newStr += word[i];
      }
      return newStr;
    })
    .join(' ');
}

console.log(reverseWords('This is an example!'));
