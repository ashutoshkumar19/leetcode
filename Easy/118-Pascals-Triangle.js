import { performance } from 'perf_hooks';

const generate = function (numRows) {
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      arr[i].push(getValue(arr, i, j));
    }
  }
  return arr;
};

const getValue = (arr, i, j) => {
  let prev_row = arr[i - 1] || [1];
  return Number(prev_row[j - 1] || 0) + Number(prev_row[j] || 0);
};

const x = performance.now();

const numRows = 5;

const data = generate(numRows);
const y = performance.now();

console.log('data: ', data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
