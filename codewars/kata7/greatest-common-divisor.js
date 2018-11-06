// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the the greatest common divisor will always be an integer that is also greater or equal to 1.

// function mygcd(a, b) {
//   if (!b) return a;
//   return mygcd(b, a % b);
// }

function mygcd(x, y) {
  return y == 0 ? x : mygcd(y, x % y);
}

console.log(mygcd(30, 12)); // 6
// console.log(mygcd(8, 9)); // 1
// mygcd(1, 1); // 1
