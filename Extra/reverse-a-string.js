import { performance } from 'perf_hooks';
import { generateString } from '../util.js';

// loop through each character
function reverseString(str) {
  if (!str || str.length <= 1 || typeof str !== 'string') {
    return str;
  }
  const reversed_str = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed_str.push(str[i]);
  }
  return reversed_str.join('');
}

// use js built-in functions
function reverseString2(str) {
  if (!str || str.length <= 1 || typeof str !== 'string') {
    return str;
  }
  return str.split('').reverse().join('');
}

// loop till mid of the string
function reverseString3(str) {
  if (!str || str.length <= 1 || typeof str !== 'string') {
    return str;
  }
  const len = str.length;
  const mid = Math.floor(len / 2);
  str = str.split('');
  let temp = '';
  for (let i = 0; i < mid; i++) {
    temp = str[i];
    str[i] = str[len - 1 - i];
    str[len - 1 - i] = temp;
  }
  return str.join('');
}

let x, y;

const str = generateString(50000000, 'uln');
// console.log('Original string: ', str);
x = performance.now();
reverseString(str);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);

x = performance.now();
reverseString2(str);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);

x = performance.now();
reverseString3(str);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
