import { performance } from 'perf_hooks';
import { generateRandomInteger } from '../util.js';

var climbStairs = function (n) {
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i++) {
    current = previous + current;
    previous = current - previous;
  }
  return current;
};

let x, y;

const n = 8;

x = performance.now();
const data = climbStairs(n);
y = performance.now();

console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
