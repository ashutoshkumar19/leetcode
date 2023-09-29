import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const maxSubArray = (arr) => {
  let sum = -Infinity;
  const len = arr.length;
  let temp = 0;

  // console.log(`temp: ${temp} \t\t\t sum: ${sum}\n`);

  for (let i = 0; i < len; i++) {
    temp = Math.max(arr[i], arr[i] + temp);
    sum = Math.max(temp, sum);
    // console.log(`scan: ${arr[i]} \t temp: ${temp} \t sum: ${sum}`);
  }

  return sum;
};

const maxSubArray2 = (arr) => {
  let max = -Infinity;
  const len = arr.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum = sum + arr[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }

  return max;
};

let x, y;

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const arr = [5,4,-1,7,8];
const arr = generateIntegerArray(10000000, -1000000, 1000000);

x = performance.now();
// console.log(maxSubArray(arr));
console.log(maxSubArray2(arr));
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
