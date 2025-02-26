import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const maxArea = (arr) => {
  let maxArea = 0;
  let length = arr.length;
  let head = 0;
  let tail = length - 1;
  while (tail - head > 0) {
    const area = Math.min(arr[head], arr[tail]) * (tail - head);
    maxArea = Math.max(maxArea, area);
    if (arr[head] > arr[tail]) {
      tail--;
    } else {
      head++;
    }
  }
  return maxArea;
};

const x = performance.now();
// const height = generateIntegerArray(100000, 0, 10000);
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [4, 3, 2, 1, 4];
// const height = [1];
console.log(maxArea(height));
const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
