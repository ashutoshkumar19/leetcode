import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const nextPermutation = (arr) => {
  const len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    // If array is completely traversed, then sort the array in asc
    if (i === 0) {
      sort(arr, i);
      return arr;
    }
    // If current element is greater than its previous element in array
    else if (arr[i] > arr[i - 1]) {
      // find the index of number which is just greater than the previous element on the right side
      const swap_index = getNextBigInteger(arr, i - 1);
      // swap the elements
      swap(arr, swap_index, i - 1);
      // sort the array on the right side starting with current element
      sort(arr, i);
      return arr;
    }
  }
};

const getNextBigInteger = (arr, index) => {
  const len = arr.length;
  for (let i = len - 1; i >= index + 1; i--) {
    if (arr[i] > arr[index]) {
      return i;
    }
  }
};

const sort = (arr, start) => {
  const main_arr_len = arr.length;
  const len = Math.floor((main_arr_len - start) / 2);
  for (let i = start; i < start + len; i++) {
    if (arr[i] > arr[main_arr_len - i + start - 1]) {
      swap(arr, i, main_arr_len - i + start - 1);
    }
  }
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const x = performance.now();

// const arr = [1, 2, 3];
// const arr = [2, 3, 1];
// const arr = [3, 2, 1];
const arr = [1, 3, 2];

const data = nextPermutation(arr);
const y = performance.now();

console.log('data: ', data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
