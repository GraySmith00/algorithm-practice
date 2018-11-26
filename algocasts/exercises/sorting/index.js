// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  let swapped;
  for (let i = 0; i < arr.length; i++) {
    if (swapped === false) return arr;
    swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]];
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  const right = arr.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

mergeSort([5, 2]);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
