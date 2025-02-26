import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

const removeElement = (arr, val) => {
  let start = -1,
    end = -1;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === val) {
      start = start === -1 ? i : start;
      end = i;
    } else if (start !== -1 && end !== -1) {
      arr.splice(start, end - start + 1);
      i = i - (end - start) - 1;
      len = arr.length;
      start = -1;
      end = -1;
    }
  }
  if (start !== -1 && end !== -1) {
    arr.splice(start, end - start + 1);
    start = -1;
    end = -1;
  }
  return arr;
};

let x, y;
const val = 2;
const arr = [0, 1, 2, 2, 3, 0, 4, 2];
// const arr = [0, 4, 4, 0, 4, 4, 4, 0, 2];
// const arr = [3,2,2,3];
// const arr = [1, 1];

x = performance.now();
const data = removeElement(arr, val);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
