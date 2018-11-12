const isPrime = n => {
  if (n % 2 === 0 || n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// console.log(isPrime(0)); // false
// console.log(isPrime(1)); // false
// console.log(isPrime(18)); // true
console.log(isPrime(61)); // true
console.log(isPrime(179430413)); // true
console.log(isPrime(32416190071)); // true
