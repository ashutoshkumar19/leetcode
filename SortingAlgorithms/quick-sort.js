import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function partition(arr, p, r) {
  let x = arr[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (arr[j] <= x) {
      i = i + 1;
      exchange(arr, i, j);
    }
  }
  exchange(arr, i + 1, r);
  return i + 1;
}

function exchange(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, p, r) {
  if (p < r) {
    const pivot = partition(arr, p, r);
    quickSort(arr, p, pivot - 1);
    quickSort(arr, pivot + 1, r);
  }
}

let x, y;

const arr = generateIntegerArray(12, 0, 100);
// const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Original array: ', arr);

x = performance.now();

quickSort(arr, 0, arr.length - 1);
console.log('\nSorted array: ', arr);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
