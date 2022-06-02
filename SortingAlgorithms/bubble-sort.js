import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      // If first value is greater than second, swap the numbers
      if (arr[j] > arr[j + 1]) {
        // swap using temp variable
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // swap in-place
        // arr[j + 1] = arr[j + 1] - arr[j];
        // arr[j] = arr[j] + arr[j + 1];
        // arr[j + 1] = arr[j] - arr[j + 1];
      }
    }
  }
}

let x, y;

const arr = generateIntegerArray(10000, 0, 10000);
// const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Original array: ', arr);

x = performance.now();

bubbleSort(arr);
console.log('Sorted array: ', arr);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
