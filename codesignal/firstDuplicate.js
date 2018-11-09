function firstDuplicate(a) {
  let duplicates = [];
  const counts = a.reduce((counts, num) => {
    const numStr = num.toString();
    if (!counts[numStr]) {
      counts[numStr] = 1;
    } else {
      duplicates.push(num);
    }
    return counts;
  }, {});
  return duplicates.length ? duplicates[0] : -1;
}

firstDuplicate([2, 1, 3, 5, 3, 2]);
firstDuplicate([1, 3, 5]);
