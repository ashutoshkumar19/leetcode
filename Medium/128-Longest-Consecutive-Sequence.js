import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const longestConsecutive = (arr) => {
  const len = arr.length;
  const hashmap = {};
  for (let i = 0; i < len; i++) {
    hashmap[arr[i]] = true;
  }

  let longest_consecutive = 0;
  let current_consecutive = 0;
  let elem;

  for (let i = 0; i < len; i++) {
    elem = arr[i];
    if (!hashmap[elem - 1]) {
      current_consecutive = 1;
      elem = elem;
      while (hashmap[elem + 1]) {
        elem++;
        current_consecutive++;
      }
      longest_consecutive = Math.max(longest_consecutive, current_consecutive);
    }
  }

  return longest_consecutive;
};

const arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

const x = performance.now();

const result = longestConsecutive(arr);
console.log(result);

const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
