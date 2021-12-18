import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

const mergeTwoLists = (list1, list2) => {
  const merged_list = [];
  let i = 0,
    j = 0;
  const len1 = list1.length;
  const len2 = list2.length;

  while (i < len1 || j < len2) {
    if (list1[i] <= list2[j]) {
      merged_list.push(list1[i]);
      i++;
    } else {
      merged_list.push(list2[j]);
      j++;
    }
  }
  return merged_list;
};

let x, y;
const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

x = performance.now();
const data = mergeTwoLists(list1, list2);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
