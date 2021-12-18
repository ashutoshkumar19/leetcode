var isPalindrome = function (num) {
  if (num < 0) {
    return false;
  }

  let rem = 0;
  let final = 0;
  let temp = num;
  while (temp > 0) {
    rem = temp % 10;
    temp = parseInt(temp / 10);
    final = final * 10 + rem;
  }
  return final === num;

  // let x = num;
  // let reversed_num = '';
  // while (x > 0) {
  //   reversed_num += `${x % 10}`;
  //   x = Math.floor(x / 10);
  // }
  // return Number(reversed_num) === num;

  // const str = num.toString();
  // const len = str.length;
  // const mid = Math.ceil(len / 2);
  // for (let i = 0; i < mid; i++) {
  //   if (str[i] !== str[len - i - 1]) {
  //     return false;
  //   }
  // }
  // return true;
};

const performance = require('perf_hooks').performance;
const x = performance.now();
console.log(isPalindrome(12345654321));
const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
