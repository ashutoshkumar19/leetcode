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

let x, y;

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const arr = [5,4,-1,7,8];
// const arr = generateIntegerArray(10000000, -1000000, 1000000);

x = performance.now();
const max = maxSubArray(arr);
y = performance.now();
console.log(max);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
