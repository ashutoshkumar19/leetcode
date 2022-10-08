import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function threeSum(arr) {
  const len = arr.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    const target = 0 - arr[i];
    const obj = JSON.parse(JSON.stringify({}));
    for (let j = 0; j < len; j++) {
      const elem = arr[j];
      if (
        obj[elem] !== undefined &&
        arr[i] !== elem &&
        arr[i] !== target - elem &&
        target - elem !== elem
      ) {
        result.push([arr[i], target - elem, elem]);
      }
      obj[target - elem] = j;
    }
  }
  return result;
}

const x = performance.now();
// const arr = generateIntegerArray(100, 100, 200);
const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr, 250));
const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
