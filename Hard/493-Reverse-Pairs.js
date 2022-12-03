import { performance } from 'perf_hooks';
import { generateRandomInteger } from '../util.js';

const reversePairsBruteForce = (arr) => {
  const len = arr.length;
  let reverse_pairs = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > 2 * arr[j]) {
        reverse_pairs++;
      }
    }
  }
  return reverse_pairs;
};

//=====================================================

function merge(arr, p, q, r, count) {
  const n1 = q - p + 1;
  const n2 = r - q;
  const L = [];
  const R = [];
  let i, j;

  const max_len = n1 >= n2 ? n1 : n2;
  for (i = 0; i < max_len; i++) {
    if (p + i <= q) {
      L[i] = arr[p + i];
    }
    if (q + i + 1 <= r) {
      R[i] = arr[q + i + 1];
    }
  }

  i = 0;
  j = 0;
  while (L[i] !== undefined && R[j] !== undefined) {
    if (L[i] > 2 * R[j]) {
      count.value = count.value + L.length - i;
      j++;
    } else {
      i++;
    }
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

function reversePairs(arr) {
  const count = { value: 0 };
  mergeSort(arr, null, null, count);
  return count.value;
}

//=====================================================

let x, y;

// const nums = [1, 3, 2, 3, 1];
// const nums = [2, 4, 3, 5, 1];
const nums = [5, 4, 3, 2, 1];

x = performance.now();

// const data = reversePairsBruteForce(nums);
const data = reversePairs(nums);

y = performance.now();

console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
