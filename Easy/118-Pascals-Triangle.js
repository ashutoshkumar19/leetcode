import { performance } from 'perf_hooks';

const generate = function (numRows) {
  const arr = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      arr[i] = [1];
      continue;
    }
    arr[i] = [1];
    for (let j = 1; j < i; j++) {
      arr[i].push(getNum(arr[i - 1][j - 1]) + getNum(arr[i - 1][j]));
    }
    arr[i].push(1);
  }
  return arr;
};

const getNum = (num) => {
  return num !== null && num !== undefined ? num : 0;
};

const x = performance.now();

const numRows = 5;

const data = generate(numRows);
const y = performance.now();

console.log('data: ', data);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
