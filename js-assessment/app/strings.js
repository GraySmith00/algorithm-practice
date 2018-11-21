exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  // reduceString: function(str, amount) {
  //   const strCounts = str.split('').reduce((strCounts, char) => {
  //     if (!strCounts[char]) {
  //       strCounts[char] = 0;
  //     }
  //     if (strCounts[char] < amount) {
  //       strCounts[char]++;
  //     }
  //     return strCounts;
  //   }, {});
  //   return Object.keys(strCounts)
  //     .map(key => {
  //       return key.repeat(strCounts[key]);
  //     })
  //     .join('');
  // },

  reduceString: function(str, amount) {
    const strArr = str.split('');

    const strCounts = strArr.reduce((strCounts, char, i) => {
      if (i === 0 || char !== strArr[i - 1]) {
        strCounts[i] = char;
      } else {
        const strCountsKeys = Object.keys(strCounts);
        let lastKey = strCountsKeys[strCountsKeys.length - 1];
        strCounts[lastKey] += char;
      }
      return strCounts;
    }, {});

    return Object.keys(strCounts)
      .map(key => {
        return strCounts[key].slice(0, amount);
      })
      .join('');
  },

  wordWrap: function(str, cols) {},

  reverseString: function(str) {}
};
