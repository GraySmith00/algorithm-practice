var romanToInt = function(s) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  const strArr = s.split('');
  return strArr.reduce((total, key, i) => {
    if (strArr[i + 1] && values[key] < values[strArr[i + 1]]) {
      total -= values[key];
    } else {
      total += values[key];
    }
    return total;
  }, 0);
};
