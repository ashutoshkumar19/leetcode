import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var longestPalindrome = function (words) {
  let len = words.length;
  let palindrome_len = 0;
  const map = {};
  let reversed = '';
  for (let i = 0; i < len; i++) {
    reversed = `${words[i][1]}${words[i][0]}`;
    if (!map[words[i]] || map[words[i]].value === 0) {
      if (map[reversed]) {
        map[reversed]['value'] += 2;
      } else {
        map[reversed] = { value: 2, is_pair: false };
      }
      if (words[i] === reversed) {
        map[reversed].is_pair = true;
      }
    } else {
      map[words[i]].value += 2;
      palindrome_len += 4;
      map[words[i]].value -= 4;
      if (map[words[i]].value === 0) {
        map[words[i]].is_pair = false;
      }
    }
  }
  const is_pair_exist = Object.values(map).some((e) => e.is_pair);
  if (is_pair_exist) {
    palindrome_len += 2;
  }
  return palindrome_len;
};

let x, y;

// let words = ['bd'];
// let words = ['lc', 'cl', 'gg'];
// let words = ['ab', 'ty', 'yt', 'lc', 'cl', 'ab'];
// let words = ['cc', 'll', 'xx'];
// let words = ['nn', 'nn', 'hg', 'gn', 'nn', 'hh', 'gh', 'nn', 'nh', 'nh'];
let words = [
  'qo',
  'fo',
  'fq',
  'qf',
  'fo',
  'ff',
  'qq',
  'qf',
  'of',
  'of',
  'oo',
  'of',
  'of',
  'qf',
  'qf',
  'of',
];

x = performance.now();
const data = longestPalindrome(words);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
