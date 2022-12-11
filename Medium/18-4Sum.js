import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const fourSum = (arr, target) => {
  const len = arr.length;
  quickSort(arr, 0, len - 1);

  console.log(arr);
  const result = [];
  const obj = {};
  let sum, temp, l, r;

  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      l = j + 1;
      r = len - 1;
      temp = arr[i] + arr[j];
      while (l < r) {
        sum = temp + arr[l] + arr[r];
        if (sum === target) {
          if (obj[[arr[i], arr[j], arr[l], arr[r]]] === undefined) {
            result.push([arr[i], arr[j], arr[l], arr[r]]);
            obj[[arr[i], arr[j], arr[l], arr[r]]] = true;
          }
          l++;
          r--;
        } else if (sum < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }
  return result;
};

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
  if (p < r) {
    const pivot = partition(arr, p, r);
    quickSort(arr, p, pivot - 1);
    quickSort(arr, pivot + 1, r);
  }
}

// const arr = [1, 0, -1, 0, -2, 2];
// const target = 0;

// const arr = [2, 2, 2, 2, 2];
// const target = 8;

// const arr = [-5, 5, 4, -3, 0, 0, 4, -2];
// const target = 4;

const arr = [-3, -2, -1, 0, 0, 1, 2, 3];
const target = 0;

const x = performance.now();

const result = fourSum(arr, target);
console.log(result);

const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
