exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  },

  sum: function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove: function(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== item) newArr.push(arr[i]);
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    return arr.splice(arr.length - 1, 1);
  },

  prepend: function(arr, item) {},

  curtail: function(arr) {},

  concat: function(arr1, arr2) {},

  insert: function(arr, item, index) {},

  count: function(arr, item) {},

  duplicates: function(arr) {},

  square: function(arr) {},

  findAllOccurrences: function(arr, target) {}
};
