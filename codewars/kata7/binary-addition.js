// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// function addBinary(a,b) {
//   const sum = a + b;
//   return (sum >>> 0).toString(2);
// }

function addBinary(a, b) {
  return (a + b).toString(2);
}

addBinary(1, 7);
