import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const rotate = (arr, k) => {
  const len = arr.length;
  k = k % len;
  if (k <= len / 2) {
    return rotateRight(arr, k, len);
  } else {
    return rotateRightAlt(arr, k, len);
  }
};

function rotateRight(arr, k, len) {
  const temp = new Array(k);
  let j = k - 1;
  for (let i = len - 1; i >= len - k; i--) {
    temp[j] = arr[i];
    arr.pop();
    j--;
  }
  arr.unshift(...temp);
  return arr;
}

function rotateRightAlt(arr, k, len) {
  for (let i = 0; i < len - k; i++) {
    arr.push(arr[i]);
  }
  arr.splice(0, len - k);
  return arr;
}

let x, y;

// const k = 4;
const k = 549444;
// const arr = [1, 2, 3, 4, 5, 6, 7];
// const arr = [1, 2];
const arr = generateIntegerArray(1000000, -2147483647, 2147483647);

x = performance.now();
const data = rotate(arr, k);
y = performance.now();
// console.log('data: ', data);
// console.log('arr: ', arr);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
