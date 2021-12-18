const longestCommonPrefix = function (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  let prefix = '';
  let len = arr.length - 1;

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      prefix = arr[i];
    }
    prefix = findCommonPrefix(prefix, arr[i + 1]);
    if (prefix === '') {
      break;
    }
  }
  return prefix;
};

const findCommonPrefix = (str1, str2) => {
  let str = '';
  const len = str1.length <= str2.length ? str1.length : str2.length;
  for (let i = 0; i < len; i++) {
    if (str1[i] === str2[i]) {
      str += str1[i];
    } else {
      break;
    }
  }
  return str;
};

const performance = require('perf_hooks').performance;
const x = performance.now();

// START
const arr = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(arr));
// END

const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
