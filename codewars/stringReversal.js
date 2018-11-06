function revStringOne(string) {
  return string
    .split('')
    .reduce((newStrArr, char) => {
      newStrArr.unshift(char);
      return newStrArr;
    }, [])
    .join('');
}

console.log(revStringOne('This is a reversed string'));

function revStringTwo(string) {
  let newStr = '';
  for (let i = string.length; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
}

console.log(revStringTwo('Another reversed string'));

function revStringThree(string) {
  if (string.length <= 0) return '';
  return revStringThree(string.slice(1)) + string.charAt(0);
}

console.log(revStringThree('Great string to reverse'));
