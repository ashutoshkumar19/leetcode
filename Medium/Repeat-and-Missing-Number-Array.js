import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function repeatedNumber(arr) {
  const result = [];
  const len = arr.length;
  const sum = (len * (1 + len)) / 2;
  let new_sum = 0;
  let flag = false;
  const obj = {};

  for (const elem of arr) {
    if (obj[elem] && !flag) {
      result.push(elem);
      flag = true;
    } else {
      obj[elem] = true;
    }
    new_sum += elem;
  }

  result.push(result[0] + sum - new_sum);

  return result;
}

// const arr = generateIntegerArray(100, 100, 200);
const arr = [3, 1, 2, 5, 3];

const x = performance.now();
const data = repeatedNumber(arr);
const y = performance.now();
console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
