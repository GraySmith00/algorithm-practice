function firstNotRepeatingCharacter(s) {
  var noRepeatChar = s
    .split('')
    .find((char, i, string) => string.indexOf(char) === s.lastIndexOf(char));
  return noRepeatChar ? noRepeatChar : '_';
}

// firstNotRepeatingCharacter("abacabad")
firstNotRepeatingCharacter('abacabaabacaba');
