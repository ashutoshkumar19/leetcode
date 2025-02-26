import { performance } from 'perf_hooks';

const majorityElementBruteForce = function (arr) {
  const len = arr.length;
  const mid = parseInt(len / 2);
  const obj = {};
  let max = -Infinity;
  let majorityElem = null;

  for (let i = 0; i < len; i++) {
    if (max > mid) {
      break;
    }
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
    if (obj[arr[i]] > max) {
      max = obj[arr[i]];
      majorityElem = arr[i];
    }
  }

  return majorityElem;
};

// Moore's counting algorithm
const majorityElement = function (arr) {
  let count = 0;
  let majorityElem = null;

  for (const elem of arr) {
    if (count === 0) {
      majorityElem = elem;
    }
    if (majorityElem === elem) {
      count++;
    } else {
      count--;
    }
  }

  return majorityElem;
};

let x, y;

const arr = [3, 2, 3];
// const arr = [2, 2, 1, 1, 1, 2, 2];

x = performance.now();
const data = majorityElement(arr);
console.log(data);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
