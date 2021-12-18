import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

const isValid = (str) => {
  const stack = [];
  const len = str.length;
  let popped_item = null;
  for (let i = 0; i < len; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      stack.push(str[i]);
    } else {
      popped_item = stack.pop();
      if (
        (str[i] === ')' && popped_item !== '(') ||
        (str[i] === '}' && popped_item !== '{') ||
        (str[i] === ']' && popped_item !== '[')
      ) {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

let x, y;

// const str = '()';
const str = '()[]{}';
// const str = '([)]';
// const str = '{[]}';
// const str = generateString(2, '(){}[]');
// console.log(str);
x = performance.now();
const data = isValid(str);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
