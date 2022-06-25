import { performance } from 'perf_hooks';

function fibonacciRecursiveMemoized() {
  const cache = {};
  return function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      }
      cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return cache[n];
    }
  };
}
const fibonacciRecursiveDynamic = fibonacciRecursiveMemoized();

let x, y;
x = performance.now();

const n = 101;
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

x = performance.now();

console.log(fibonacciRecursiveDynamic(n));

y = performance.now();
console.log(`Dynamic recursive time taken: ${Math.floor(y - x)} ms`);
