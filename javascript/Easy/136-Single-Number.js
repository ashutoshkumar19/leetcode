import { performance } from 'perf_hooks';
import { generateRandomInteger } from '../util.js';

var singleNumber = function (list) {
  let len = list.length;
  let elem = 0;
  for (let i = 0; i < len; i++) {
    elem = elem ^ list[i];
  }
  return elem;
};

let x, y;

const list = [2, 2, 4, 3, 1, 1, 4, 3, 5, 7, 7];
// const list = [4, 1, 2, 1, 2];
// const list = [2, 2, 1];
// const list = [1];

x = performance.now();
const data = singleNumber(list);
y = performance.now();

console.log(data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
