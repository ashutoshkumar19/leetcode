import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

const setZeroes = function (matrix) {
  const null_rows = [];
  const null_columns = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (!null_rows.includes(i)) {
          null_rows.push(i);
        }
        if (!null_columns.includes(j)) {
          null_columns.push(j);
        }
      }
    }
  }

  // console.log('null_rows: ', null_rows);
  // console.log('null_columns: ', null_columns);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (null_rows.includes(i) || null_columns.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

const x = performance.now();
// const matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];

const matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

const data = setZeroes(matrix);
const y = performance.now();

console.log('matrix: ', matrix);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
