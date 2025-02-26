import { performance } from 'perf_hooks';

const majorityElementBruteForce = function (arr) {
  const len = arr.length;
  const maxLimit = parseInt(len / 3);
  const obj = {};
  const result = [];

  for (const elem of arr) {
    if (obj[elem] > maxLimit) {
      continue;
    }
    if (!obj[elem]) {
      obj[elem] = 1;
    } else {
      obj[elem]++;
    }
    if (obj[elem] > maxLimit) {
      result.push(elem);
    }
  }

  return result;
};

// Moore's counting algorithm
const majorityElement = function (arr) {
  let count1 = 0;
  let count2 = 0;
  let num1 = null;
  let num2 = null;

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

// const arr = [3, 2, 3];
const arr = [2, 2];

x = performance.now();
const data = majorityElementBruteForce(arr);
console.log(data);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
