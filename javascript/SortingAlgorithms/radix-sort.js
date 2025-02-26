import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

function radixSort(arr) {
  let maxLength = largestNum(arr);

  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let num = getNum(arr[j], i);

      if (num !== undefined) buckets[num].push(arr[j]);
    }
    arr = buckets.flat();
  }
  return arr;
}

function getNum(num, index) {
  const strNum = String(num);
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];

  if (foundNum === undefined) return 0;
  else return foundNum;
}

function largestNum(arr) {
  let largest = '0';

  arr.forEach((num) => {
    const strNum = String(num);

    if (strNum.length > largest.length) largest = strNum;
  });

  return largest.length;
}

let x, y;

// const arr = generateIntegerArray(4000, 0, 4000);
const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log('Original array: ', arr);

x = performance.now();

const sortedArray = radixSort(arr);
console.log('\nSorted array: ', sortedArray);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
