import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var lengthOfLastWord = function (s) {
  // return s.trim().split(' ').pop().length;
  const len = s.length;
  let word_length = 0;
  for (let i = len - 1; i >= 0; i--) {
    if (s[i] === ' ' && word_length > 0) {
      return word_length;
    } else if (s[i] !== ' ') {
      word_length++;
    }
  }
  return word_length;
};

let x, y;

const s = 'Hello World ';

x = performance.now();
const data = lengthOfLastWord(s);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
