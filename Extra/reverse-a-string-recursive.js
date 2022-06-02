import { performance } from 'perf_hooks';
import { generateString } from '../util.js';

// loop till mid of the string
function reverseStringIterative(str) {
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

function reverseStringRecursive(str, len = str.length) {
  if (len - 1 <= 0) {
    return str[len - 1];
  }
  // return string
  return str[len - 1] + reverseStringRecursive(str, len - 1);

  // return array
  // let array = [];
  // array.push(str[len - 1]);
  // array = array.concat(reverseStringRecursive(str, len - 1));
  // return array;
}

let x, y;

// const str = generateString(5865, 'uln');
const str = 'Ashutosh Kumar';
// console.log('Original string: ', str);

x = performance.now();
const data = reverseStringIterative(str);
console.log('\nReversed string iterative: ', data);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);

x = performance.now();
let data2 = reverseStringRecursive(str);
console.log('\nReversed string recursive: ', data2);
y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
