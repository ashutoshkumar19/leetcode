import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      // If first value is greater than second, swap the numbers
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let x, y;

const arr = generateIntegerArray(10000, 0, 10000);
// const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Original array: ', arr);

x = performance.now();

selectionSort(arr);
console.log('Sorted array: ', arr);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
