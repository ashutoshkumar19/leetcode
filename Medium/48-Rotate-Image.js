import { performance } from 'perf_hooks';
import { generateIntegerArray } from '../util.js';

// Using extra memory
function rotateExtraMemory(matrix) {
  const len = matrix.length;
  const new_matrix = [];
  for (let i = 0; i < len; i++) {
    const row = [];
    for (let j = 0; j < len; j++) {
      row.push(matrix[len - j - 1][i]);
    }
    new_matrix.push(row);
  }
  return new_matrix;
}

//==================================================================

// In place
function rotate(matrix) {
  const len = matrix.length;
  const mid = Math.floor(len / 2);
  for (let i = 0; i < len; i++) {
    // Create transpose
    for (let j = i; j < len; j++) {
      swap(matrix, i, j, j, i);
    }
    // swap columns (mirror image)
    for (let k = 0; k < mid; k++) {
      swap(matrix, i, k, i, len - k - 1);
    }
  }
}

function swap(matrix, i, j, x, y) {
  const temp = matrix[i][j];
  matrix[i][j] = matrix[x][y];
  matrix[x][y] = temp;
}

//==================================================================

const x = performance.now();
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

const matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
// const data = rotateExtraMemory(matrix);
rotate(matrix);
const y = performance.now();

// console.log(data);
console.log(matrix);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
