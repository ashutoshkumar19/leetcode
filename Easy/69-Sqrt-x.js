import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var mySqrt = function (x) {
  
};

const x = 64;

x = performance.now();
const data = mySqrt(x);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
