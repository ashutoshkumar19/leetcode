import { performance } from 'perf_hooks';

// Brute force
function maxLenBruteForce(arr) {
  const len = arr.length;
  let max_len = 0;
  let sum = 0;
  let cur_max_len = 0;

  for (let i = 0; i < len; i++) {
    cur_max_len = 0;
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      cur_max_len++;
      if (sum === 0) {
        max_len = Math.max(cur_max_len, max_len);
      }
    }
  }

  return max_len;
}

function maxLen(arr) {
  const len = arr.length;
  let max_len = 0;
  let sum = 0;
  const hashmap = {};

  for (let i = 0; i < len; i++) {
    sum += arr[i];
    if (sum === 0) {
      max_len = i + 1;
    } else {
      if (hashmap[sum] !== undefined) {
        max_len = Math.max(max_len, i - hashmap[sum]);
      } else {
        hashmap[sum] = i;
      }
    }
  }

  return max_len;
}

// -------------------------------------------------------------

let x, y;

const arr = [15, -2, 2, -8, 1, 7, 10, 23];

x = performance.now();

// const data = maxLenBruteForce(arr);
// console.log(data);

const data = maxLen(arr);
console.log(data);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
