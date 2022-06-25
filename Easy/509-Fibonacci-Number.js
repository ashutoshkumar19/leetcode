import { performance } from 'perf_hooks';

const cache = {};
function fib(n) {
  if (n in cache) {
    return cache[n];
  } else {
    if (n < 2) {
      return n;
    }
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }
}

let x, y, z;
x = performance.now();

const n = 30;
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

x = performance.now();

console.log(fib(n));

y = performance.now();
console.log(`Dynamic recursive time taken: ${Math.floor(y - x)} ms`);
