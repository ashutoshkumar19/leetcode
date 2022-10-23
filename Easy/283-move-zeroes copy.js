import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const moveZeroes = (arr) => {
  const zeroes = [];
  arr = arr.filter((e) => {
    if (!e) {
      zeroes.push(0);
      return false;
    } else {
      return true;
    }
  });
  return arr.concat(zeroes);
};

const moveZeroes2 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      arr.push(0);
      arr.splice(i, 1);
    }
  }
  return arr;
};

let x, y;

const arr = [0, 1, 0, 3, 12];
// const arr = [5,4,-1,7,8];
// const arr = generateIntegerArray(10000000, -1000000, 1000000);

x = performance.now();
const data = moveZeroes2(arr);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
