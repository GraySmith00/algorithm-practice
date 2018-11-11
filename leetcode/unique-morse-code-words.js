// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
  const code = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const codeWords = words.map(word => {
    return word
      .split('')
      .map(char => {
        const index = alphabet.indexOf(char);
        return code[index];
      })
      .join('');
  });

  return new Set(codeWords).size;
};
