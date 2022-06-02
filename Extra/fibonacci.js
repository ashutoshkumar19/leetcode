import { performance } from 'perf_hooks';

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function fibonacciIterative(n) {
  let series = [];
  for (let i = 0; i <= n; i++) {
    if (i >= 2) {
      series.push(series[i - 1] + series[i - 2]);
    } else series.push(i);
  }
  return series[n];
}

let x, y, z;
x = performance.now();

const n = 35;
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const data = fibonacciIterative(n);
console.log(data);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);

const data2 = fibonacciRecursive(n);
console.log(data2);

z = performance.now();
console.log(`Time taken: ${Math.floor(z - y)} ms`);
