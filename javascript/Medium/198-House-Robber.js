import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

// Recursive approach with memoization (Dynamic Programming)
function rob(nums, i) {
  const cache = {};
  return function robMemoised(nums, i) {
    if (cache[i] !== undefined) {
      return cache[i];
    } else {
      if (i < 0) {
        return 0;
      }
      cache[i] = Math.max(robMemoised(nums, i - 2) + nums[i], robMemoised(nums, i - 1));
      return cache[i];
    }
  };
}

// Iterative approach
function robIterative(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let prev1 = 0;
  let prev2 = 0;
  for (const num of nums) {
    const tmp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = tmp;
  }
  return prev1;
}

let x, y;
x = performance.now();

// const nums = [1, 2, 3, 1];
// const nums = [2, 7, 9, 3, 1];
const nums = generateIntegerArray(1000, 0, 1000);

x = performance.now();

console.log(rob()(nums, nums.length - 1));

y = performance.now();

console.log(`Dynamic recursive time taken: ${Math.floor(y - x)} ms\n`);

console.log(robIterative(nums));

x = performance.now();
console.log(`Iterative time taken: ${Math.floor(x - y)} ms`);
