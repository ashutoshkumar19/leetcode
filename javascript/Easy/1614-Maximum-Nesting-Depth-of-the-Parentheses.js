import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const maxDepth = (str) => {
  let max_depth = 0;
  const len = str.length;

  if (!str || !str.trim().length) {
    return max_depth;
  }

  let depth = 0;

  for (let i = 0; i < len; i++) {
    if (str[i] === '(') {
      depth++;
      max_depth = Math.max(max_depth, depth);
    } else if (str[i] === ')') {
      depth--;
    }
  }

  return max_depth;
};

let x, y;

// const s = '(1+(2*3)+((8)/4))+1';
const s = '(1)+((2))+(((3)))';

x = performance.now();
const data = maxDepth(s);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
