function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// function factorial(n) {
//   let num = 1;
//   for (let i = n; i > 0; i--) {
//     num *= i;
//   }
//   return num;
// }

// factorial(0) // 1
// factorial(1) // 1
console.log(factorial(6)); // 720
