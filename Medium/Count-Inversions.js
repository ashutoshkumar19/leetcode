import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function countInversionsBruteForce(arr) {
  const len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }

  return count;
}

//=====================================================

function merge(arr, p, q, r, count) {
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
      count.value += L.length - i;
    }
  }
}

function mergeSort(arr, p, r, count) {
  p = p === null ? 0 : p;
  r = r === null ? arr.length - 1 : r;
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q, count);
    mergeSort(arr, q + 1, r, count);
    merge(arr, p, q, r, count);
  }
}

function countInversions(arr) {
  const count = { value: 0 };
  mergeSort(arr, null, null, count);
  console.log('count: ', count);
}

//=====================================================

// const arr = generateIntegerArray(100000, 0, 100000);
const arr = [2, 5, 1, 3, 4];

const x = performance.now();
// const data = countInversionsBruteForce(arr);
const data = countInversions(arr);
const y = performance.now();
// console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
