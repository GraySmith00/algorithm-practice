function validParentheses(parens) {
  const stack = [];
  const pairs = {
    '(': ')'
  };
  for (let paren of parens) {
    if (Object.keys(pairs).includes(paren)) {
      stack.push(paren);
    } else {
      if (pairs[stack[stack.length - 1]] !== paren) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }

//   return n == 0;
// }

// validParentheses( "()" ) // true);
// validParentheses( "())" ) // false);
