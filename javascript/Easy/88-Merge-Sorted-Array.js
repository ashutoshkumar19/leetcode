import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

const merge = (nums1, m, nums2, n) => {
  const temp = nums1;
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (i >= 0 || j >= 0) {
    if (temp[i] !== undefined && nums2[j] !== undefined) {
      if (temp[i] >= nums2[j]) {
        nums1[k] = temp[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
    } else if (temp[i] !== undefined) {
      nums1[k] = temp[i];
      i--;
    } else if (nums2[j] !== undefined) {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

// Write code here
let x, y;

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

x = performance.now();

const merged_data = merge(nums1, m, nums2, n);
y = performance.now();

console.log(nums1);

console.log(`\nTime taken: ${Math.floor(y - x)} ms`);
