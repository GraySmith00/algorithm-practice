// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// function XO(str) {
//   var isX = str.match(/x/gi);
//   var isO = str.match(/o/gi);
//   if (isX && isO) {
//     return isX.length === isO.length;
//   } else if (!isX && !isO) {
//     return true;
//   } else {
//     return false;
//   }
// }

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO('time to exit the building'));
