// https://codeburst.io/understanding-memoization-in-3-minutes-2e58daf33a19

function memo(func) {
  var cache = {};
  return function() {
    var key = JSON.stringify(arguments);
    if (cache[key]) {
      console.log(cache);
      return cache[key];
    } else {
      val = func.apply(null, arguments);
      cache[key] = val;
      return val;
    }
  };
}

const fib = memo(function(n) {
  if (n < 2) {
    return 1;
  } else {
    console.log('loading...');
    return fib(n - 2) + fib(n - 1);
  }
});

console.log(fib(50));
