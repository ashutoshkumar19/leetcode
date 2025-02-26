import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

// faster
var addBinary = function (a, b) {
  let str = '';
  let len = 0;
  if (a.length >= b.length) {
    len = a.length;
    b = generateZeroes(len, b.length) + b;
  } else {
    len = b.length;
    a = generateZeroes(len, a.length) + a;
  }
  let carry = 0;
  let data = { result: 0, carry: 0 };
  for (let i = len - 1; i >= 0; i--) {
    data = addBits(Number(a[i]), Number(b[i]), carry);
    str = data.result.toString() + str;
    carry = data.carry;
  }
  if (carry) {
    str = carry + str;
  }
  return str;
};

function generateZeroes(max_len, cur_len) {
  let temp_str = '';
  for (let i = 0; i < max_len - cur_len; i++) {
    temp_str += '0';
  }
  return temp_str;
}

// ------------------------------------------------------------

var addBinary2 = function (a, b) {
  a = a.split('').reverse();
  b = b.split('').reverse();
  let final = [];
  let len = Math.max(a.length, b.length);
  let carry = 0;
  let data = { result: 0, carry: 0 };
  for (let i = 0; i < len; i++) {
    data = addBits(Number(a[i]) || 0, Number(b[i]) || 0, carry);
    final.push(data.result);
    carry = data.carry;
  }
  if (carry) {
    final.push(carry);
  }
  return final.reverse().join('');
};

function addBits(bit1, bit2, carry) {
  if (bit1 + bit2 + carry === 2) {
    return { result: 0, carry: 1 };
  } else if (bit1 + bit2 + carry === 3) {
    return { result: 1, carry: 1 };
  } else {
    return { result: bit1 + bit2 + carry, carry: 0 };
  }
}

let x, y;

// const a = '1';
// const b = '111';

const a = generateString(10000000, '01');
const b = generateString(10000000, '01');

x = performance.now();
const data = addBinary(a, b);
y = performance.now();
// console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
