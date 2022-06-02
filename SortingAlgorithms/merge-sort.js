import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function merge(arr, p, q, r) {
  const n1 = q - p + 1;
  const n2 = r - q;
  const L = [];
  const R = [];
  let i, j;
  for (i = 0; i < n1; i++) {
    L[i] = arr[p + i];
  }
  for (j = 0; j < n2; j++) {
    R[j] = arr[q + j + 1];
  }
  i = 0;
  j = 0;
  for (let k = p; k <= r; k++) {
    if (R[j] === undefined || L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
  }
}

function mergeSort(arr, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

let x, y;

// const arr = generateIntegerArray(12, 0, 100);
const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Original array: ', arr);

x = performance.now();

mergeSort(arr, 0, arr.length - 1);
console.log('Sorted array: ', arr);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
