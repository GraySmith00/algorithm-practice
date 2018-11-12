// https://leetcode.com/problems/max-increase-to-keep-city-skyline/

var maxIncreaseKeepingSkyline = function(grid) {
  let maxLeftRight = grid.map(row => Math.max(...row));
  let maxTopBottom = grid.map((arr, i) => {
    let max = -1;
    grid.forEach(row => (max = row[i] > max ? row[i] : max));
    return max;
  });
  let count = 0;
  grid.forEach((row, rowIndex) => {
    row.forEach((num, i) => {
      if (maxTopBottom[i] <= maxLeftRight[rowIndex]) {
        count += maxTopBottom[i] - num;
      } else {
        count += maxLeftRight[rowIndex] - num;
      }
    });
  });
  return count;
};

const city = [[3, 0, 8, 4], [2, 4, 5, 7], [9, 2, 6, 3], [0, 3, 1, 0]];

maxIncreaseKeepingSkyline(city);

// const newCity = [ [8, 4, 8, 7],
//                   [7, 4, 7, 7],
//                   [9, 4, 8, 7],
//                   [3, 3, 3, 3] ]
