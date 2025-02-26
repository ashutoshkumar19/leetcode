import { performance } from 'perf_hooks';
import { generateRandomInteger } from '../util.js';

var mySqrt = function (num) {
  if (num < 2) return num;
  let root = 0;
  let max = Math.ceil(num / 2);
  for (let i = 1; i <= max; i++) {
    if (i * i > num) return root;
    else root = i;
  }
  return root;
};

var mySqrt2 = function (num) {
  if (num < 2) return num;
  let start = 0;
  let end = Math.ceil(num / 2);
  let mid = Math.floor((start + end) / 2);
  let sq;

  while (end > start + 1) {
    mid = Math.floor((start + end) / 2);
    sq = mid * mid;
    if (sq === num) return mid;
    else if (sq > num) end = mid;
    else start = mid + 1;
  }

  if (num >= end * end) return end;
  else if (num >= start * start) return start;
  else return start - 1;
};

let x, y;

const num = 9;

x = performance.now();
const data = mySqrt2(num);
y = performance.now();

console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
