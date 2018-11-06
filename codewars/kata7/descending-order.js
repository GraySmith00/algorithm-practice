// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421
// Input: 145263 Output: 654321
// Input: 1254859723 Output: 9875543221

// function descendingOrder(n){
//   return Number(n.toString().split('').sort((a,b) => {
//     return b-a;
//   }).join(''));
// }

function descendingOrder(n) {
  return parseInt(
    String(n)
      .split('')
      .sort()
      .reverse()
      .join('')
  );
}

console.log(descendingOrder(1254859723));
