import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

const removeDuplicates = (arr) => {
  let start = -1,
    end = -1;
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] === arr[i - 1]) {
      start = start === -1 ? i - 1 : start;
      end = i;
    } else if (start !== -1 && end !== -1) {
      arr.splice(start, end - start);
      i = i - (end - start);
      len = arr.length;
      start = -1;
      end = -1;
    }
  }
  if (start !== -1 && end !== -1) {
    arr.splice(start, end - start);
    start = -1;
    end = -1;
  }
  return arr;
};

let x, y;
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const arr = [1,1,2];
// const arr = [1, 1];

x = performance.now();
const data = removeDuplicates(arr);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
