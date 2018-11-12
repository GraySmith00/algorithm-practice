function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// fib(0) // 0
// fib(1) // 1
console.log(fib(50)); // 55
// fib(20) // 6765

function fibSeq(n) {
  if (n <= 2) return [1, 1];
  const prev = fibSeq(n - 1);
  const num = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, num];
}

console.log(fibSeq(10));
