import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
};

let x, y;

// const digits = [4, 3, 2, 1];
const digits = [9];

x = performance.now();
const data = plusOne(digits);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
