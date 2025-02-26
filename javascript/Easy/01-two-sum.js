import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function twoSum(arr, target) {
  const len = arr.length;
  const obj = {};
  for (let i = 0; i < len; i++) {
    const elem = arr[i];
    if (obj[elem] !== undefined) {
      return [obj[elem], i];
    }
    obj[target - elem] = i;
  }
  return [];
}

function twoSumInefficient(arr, target) {
  const sum_array = [];
  arr.forEach((element, index) => {
    arr.forEach((i_element, i_index) => {
      if (index !== i_index && element + i_element === target) {
        if (!sum_array.includes(index) || !sum_array.includes(i_index))
          sum_array.push(index, i_index);
      }
    });
  });
  return sum_array;
}

const x = performance.now();
const arr = generateIntegerArray(100, 100, 200);
console.log(twoSum(arr, 250));
// console.log(twoSumInefficient(arr, 1028940));
const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
