var reverse = function(x) {
  const revNum = parseInt(
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  );
  if (Math.abs(revNum) > Math.pow(2, 31)) return 0;
  return x < 0 ? 0 - revNum : revNum;
};
