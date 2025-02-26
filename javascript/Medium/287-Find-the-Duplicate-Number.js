import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const findDuplicate = (nums) => {
  const len = nums.length;
  const obj = {};
  for (let i = 0; i < len; i++) {
    if (obj[nums[i]]) {
      return nums[i];
    }
    obj[nums[i]] = true;
  }
};

let x, y;

// const nums = [1, 3, 4, 2, 2];
const nums = [3, 1, 3, 4, 2];
// const nums = [1, 2, 2];

x = performance.now();
const data = findDuplicate(nums);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
