import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var searchInsert = function (nums, target) {
  const len = nums.length;

  if (target <= nums[0]) return 0;
  else if (target > nums[len - 1]) return len;

  let start = 0;
  let end = len - 1;
  let index = 0;
  while (start !== end && end > start + 1) {
    index = Math.floor((start + end) / 2);
    if (target === nums[index]) return index;
    else if (target < nums[index]) end = index;
    else start = index;
  }
  return start + 1;
};

let x, y;

const nums = [1, 4, 7, 12, 23, 46, 55, 67, 108];
const target = 55;

x = performance.now();
const data = searchInsert(nums, target);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
