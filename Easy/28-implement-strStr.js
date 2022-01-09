import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

const strStr = (haystack, needle) => {
  if (!needle || needle.trim() === '') {
    return 0;
  }
  const haystack_len = haystack.length;
  const needle_len = needle.length;
  let count = 0;
  for (let i = 0; i < haystack_len; i++) {
    if (haystack[i] === needle[0] && haystack[i + needle_len - 1] === needle[needle_len - 1]) {
      count = 1;
      for (let j = 1; j < needle_len; j++) {
        if (needle[j] === haystack[i + j]) {
          count++;
        } else {
          break;
        }
      }
      if (count === needle_len) {
        return i;
      }
    }
  }
  return -1;
};

const x = performance.now();

const haystack = 'ashutoshkumar';
const needle = 'shk';
console.log(strStr(haystack, needle));

const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
