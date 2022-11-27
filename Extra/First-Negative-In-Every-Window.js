import { performance } from 'perf_hooks';

/* TAG: Sliding window */

function firstNegativeInEveryWIndowBruteForce(arr, k) {
  const len = arr.length;
  const result = [];

  for (let i = 0; i <= len - k; i++) {
    let found = false;
    for (let j = i; j < i + k; j++) {
      if (arr[j] < 0) {
        found = true;
        result.push(arr[j]);
        break;
      }
    }
    if (!found) {
      result.push(0);
    }
  }
  return result;
}

function firstNegativeInEveryWIndow(arr, w_size) {
  const len = arr.length;
  const result = [];
  const negatives = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (j < len) {
    if (arr[j] < 0) {
      negatives.push(arr[j]);
    }
    if (j - i + 1 === w_size) {
      result.push(negatives[k] || 0);
      if (arr[i] === negatives[k]) {
        k++;
      }
      i++;
    }
    j++;
  }
  return result;
}

let x, y, z;
x = performance.now();

// const arr = [4, -7, 4, 6, 7, -11, 2, 4];
// const op = [-7, -7, 0, 0, -11, -11, 0];
// const k = 2;

const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const op = [-1, -1, -7, -15, -15, 0];
const k = 3;

const data = firstNegativeInEveryWIndow(arr, k);
console.log(data);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
