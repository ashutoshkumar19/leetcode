import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var capitalizeTitle = function (title) {
  let list = title.split(' ').map((e) => e.toLowerCase());
  const len = list.length;

  for (let i = 0; i < len; i++) {
    if (list[i].length > 2) {
      list[i] = list[i].charAt(0).toUpperCase() + list[i].substring(1);
    }
  }
  return list.join(' ');
};

let x, y;

const title = 'i lOve leetcode';

x = performance.now();
const data = capitalizeTitle(title);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
