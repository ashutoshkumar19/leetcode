import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const containsDuplicate = (arr) => {
  const map = {};
  for (const e of arr) {
    if (map[e] !== null && map[e] !== undefined) {
      return true;
    }
    map[e] = true;
  }
  return false;
};

let x, y;

// const arr = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
// const arr = [5,4,-1,7,8];
const arr = generateIntegerArray(100000, -1000000000, 1000000000);

x = performance.now();
const data = containsDuplicate(arr);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
