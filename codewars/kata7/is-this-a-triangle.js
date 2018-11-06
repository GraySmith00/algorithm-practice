// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  return a + b > c;
}

isTriangle(1, 2, 2);
// isTriangle(7,2,2)
