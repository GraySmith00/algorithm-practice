// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num){
//   const sqStr = num.toString().split('').map(val => {
//     return Math.pow(val, 2);
//   }).join('')
//   return parseInt(sqStr);
// }

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(val => val * val)
      .join('')
  );
}

console.log(squareDigits(9119));
