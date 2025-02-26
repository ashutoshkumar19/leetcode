import { performance } from 'perf_hooks';

function subarraysXor(arr, num) {
  const len = arr.length;
  let count = 0;
  let xor = 0;
  const hashmap = {};

  for (let i = 0; i < len; i++) {
    xor = xor ^ arr[i];
    if (xor === num) {
      count++;
    } else if (hashmap[xor] !== undefined) {
      hashmap[xor]++;
      count += hashmap[xor];
    } else {
      hashmap[xor] = 1;
    }
  }

  return count;
}

// -------------------------------------------------------------

let x, y;

// const A = [4, 2, 2, 6, 4];
// const B = 6;

// const A = [5, 6, 7, 8, 9];
// const B = 5;

const A = [25, 79, 59, 63, 65, 6, 46, 82, 28, 62];
const B = 94;

x = performance.now();

const data = subarraysXor(A, B);
console.log(data);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
