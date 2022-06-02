import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function insertionSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else
      for (let j = 1; j < i; j++) {
        // If first value is greater than second, swap the numbers
        if (arr[i] > arr[j - 1] && arr[i] < arr[j]) {
          arr.unshift(j, 0, arr.splice(i, 1)[0]);
        }
      }
  }
}

let x, y;

// const arr = generateIntegerArray(10000, 0, 10000);
const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Original array: ', arr);

x = performance.now();

insertionSort(arr);
console.log('Sorted array: ', arr);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
