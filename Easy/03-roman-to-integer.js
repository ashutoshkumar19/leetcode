var romanToInt = function (s) {
  const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const len = s.length;
  let temp_char = '';
  let mapped_num = 0;
  let num = 0;

  for (let i = len - 1; i >= 0; i--) {
    mapped_num = mapping[s[i]];
    temp_char = s[i + 1];
    if (temp_char && mapped_num < mapping[temp_char]) {
      num = num - mapped_num;
    } else {
      num = num + mapped_num;
    }
  }

  return num;
};

const performance = require('perf_hooks').performance;
const x = performance.now();
console.log(romanToInt('MCMXCIV'));
const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
