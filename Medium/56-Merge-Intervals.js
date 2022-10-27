import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function partition(arr, p, r) {
  let x = arr[r][0];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (arr[j][0] <= x) {
      i = i + 1;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, r);
  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, p, r) {
  p = p === undefined ? 0 : p;
  r = r === undefined ? arr.length - 1 : r;
  if (p < r) {
    const pivot = partition(arr, p, r);
    quickSort(arr, p, pivot - 1);
    quickSort(arr, pivot + 1, r);
  }
}

//==================================================================

const merge = (intervals) => {
  quickSort(intervals);
  let len = intervals.length;
  for (let i = 0; i < len - 1; i++) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1]);
      intervals.splice(i + 1, 1);
      i--;
      len--;
    }
  }
  return intervals;
};

//==================================================================

const x = performance.now();

let intervals;

intervals = [
  [2, 6],
  [15, 18],
  [1, 3],
  [8, 10],
];

// const intervals = [
//   [1, 4],
//   [1, 5],
// ];

intervals = [
  [1, 4],
  [0, 2],
  [3, 5],
];

const data = merge(intervals);
const y = performance.now();

// console.log(data);
console.log(intervals);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
