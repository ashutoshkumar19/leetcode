import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function partition(arr, p, r) {
  let x = arr[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (arr[j] <= x) {
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

let x, y;

// const arr = [2, 0, 2, 1, 1, 0];
const arr = generateIntegerArray(100000, 0, 2);

x = performance.now();
quickSort(arr);
y = performance.now();
// console.log(arr);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
