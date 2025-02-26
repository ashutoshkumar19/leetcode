import { performance } from 'perf_hooks';
import { generateString } from '../util.js';

function LongestWord(sen) {
  const list = sen.split(/\W/);
  let max = 0;
  let str = '';
  for (const elem of list) {
    if (elem.length > max) {
      max = elem.length;
      str = elem;
    }
  }
  return str;
}

let x, y;

const str = 'fun&!! time';
// const str = generateString(100, 'uln', true);
x = performance.now();
const data = LongestWord(str);
console.log(data);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
