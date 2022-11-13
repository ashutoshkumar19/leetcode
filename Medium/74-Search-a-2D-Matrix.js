import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
    return false;
  }

  for (let i = 0; i < m; i++) {
    if (target > matrix[i][n - 1]) {
      continue;
    }
    return binarySearch(matrix[i], target, 0, n - 1);
  }

  return false;
};

const binarySearch = (arr, target, start, end) => {
  const mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) {
    return true;
  } else if (start >= end) {
    return false;
  }

  if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  } else if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, end);
  }
  return false;
};

// const arr = [2, 4, 5, 6, 8, 12, 14, 16];
// const target = 1;
// console.log(binarySearch(arr, target, 0, arr.length - 1));

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

// const matrix = [[1, 3, 5]];

const target = 20;

const x = performance.now();
const data = searchMatrix(matrix, target);
const y = performance.now();

console.log('data: ', data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
