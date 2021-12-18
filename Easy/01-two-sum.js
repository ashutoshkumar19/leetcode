function twoSum(arr, target) {
  const len = arr.length;
  const obj = {};
  for (let i = 0; i < len; i++) {
    const elem = arr[i];
    if (obj[elem] !== undefined) {
      return [obj[elem], i];
    }
    obj[target - elem] = i;
  }
}

function twoSumInefficient(arr, target) {
  const sum_array = [];
  arr.forEach((element, index) => {
    arr.forEach((i_element, i_index) => {
      if (index !== i_index && element + i_element === target) {
        if (!sum_array.includes(index) || !sum_array.includes(i_index))
          sum_array.push(index, i_index);
      }
    });
  });
  return sum_array;
}

const performance = require('perf_hooks').performance;
const x = performance.now();
const arr = new Array(10000).fill().map(() => Math.floor(Math.random() * 10000000) + 1);
console.log(twoSum(arr, 1028940));
// console.log(twoSumInefficient(arr, 1028940));
const y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
