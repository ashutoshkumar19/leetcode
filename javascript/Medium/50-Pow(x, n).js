import { performance } from 'perf_hooks';

const myPow = (x, n) => {
  const len = Math.abs(n);
  const is_negative = n < 0;
  let i;
  let result = 1;

  for (i = 1; i <= len; i = i * 2) {
    if (i === 1) {
      result = is_negative ? result / x : result * x;
    } else {
      result = result * result;
    }
  }

  if (i > n) {
    for (let j = i / 2; j < len; j++) {
      result = is_negative ? result / x : result * x;
    }
  }

  return result;
};

const x = performance.now();
console.log(myPow(2, 10));
const y = performance.now();

console.log(`Time taken: ${Math.floor(y - x)} ms`);
