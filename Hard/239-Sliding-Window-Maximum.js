import { performance } from 'perf_hooks';
import { generateRandomInteger } from '../util.js';

const maxSlidingWindow = (arr, w_size) => {
  const len = arr.length;
  const result = [];
  const max_list = [];
  let i = 0;
  let j = 0;
  let max_pos = 0;

  while (j < len) {
    // console.log(`\narr[i=${i}] = `, arr[i]);
    // console.log(`arr[j=${j}] = `, arr[j]);

    if (j - i + 1 === w_size) {
      if (arr[i - 1] !== undefined && arr[i - 1] === max_list[max_pos]) {
        max_pos++;
      }
      max_pos = pushToMaxList(max_list, arr[j], max_pos);
      result.push(max_list[max_pos] || 0);
      i++;
    } else {
      max_pos = pushToMaxList(max_list, arr[j], max_pos);
    }

    // console.log(`max_list = `, max_list);
    // console.log(`max_pos = `, max_pos);
    // console.log(`result = `, result);

    j++;
  }

  return result;
};

const pushToMaxList = (max_list, num, max_pos) => {
  if (max_list[max_pos] === undefined) {
    max_list[max_pos] = num;
  } else {
    if (num > max_list[max_pos]) {
      max_pos = max_list.length;
      max_list[max_pos] = num;
    } else {
      while (max_list[max_list.length - 1] < num) {
        max_list.pop();
      }
      max_list.push(num);
    }
  }
  return max_pos;
};

// ============================================================================

let x, y;

// const nums = [1];
// const k = 1;

// const nums = [1, -1];
// const k = 1;

// const nums = [7, 2, 4];
// const k = 2;

// const nums = [5, 3, 4];
// const k = 1;

// const nums = [1, 3, 1, 2, 0, 5];
// const k = 3;

// const nums = [-7, -8, 7, 5, 7, 1, 6, 0];
// const k = 4;

const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

/* 
Use a queue to store max data

[1, 3, -1]
[3, -1]     -> 3

[3, -1, -3]
[3, -1, -3] -> 3

[-1, -3, 5]
[5]         -> 5

[-3, 5, 3]
[5, 3]      -> 5

[5, 3, 6]
[6]         -> 6

[3, 6, 7]
[7]         -> 7

result: [3, 3, 5, 5, 6, 7]

*/

// const nums = [1, -1];

x = performance.now();
const data = maxSlidingWindow(nums, k);
y = performance.now();

console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
