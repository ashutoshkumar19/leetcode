import { performance } from 'perf_hooks';

function findFactorialRecursive(num) {
  if (num <= 0) {
    return 1;
  }
  return (num * findFactorialRecursive(num - 1));
}

function findFactorialIterative(num) {
  let factorial = 1;
  while (num > 0) {
    factorial = factorial * num;
    num--;
  }
  return factorial;
}

let x, y;
x = performance.now();

/* ----------------------- START --------------------- */

const num = 6;
const data = findFactorialRecursive(num);
console.log(data);

/* ----------------------- END ----------------------- */

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
