import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

var maxProfit = function (prices) {
  const len = prices.length;
  let profit = 0;
  let temp = prices[0];
  for (let i = 1; i < len; i++) {
    if (prices[i] - temp > profit) {
      profit = prices[i] - temp;
    } else if (prices[i] < temp) {
      temp = prices[i];
    }
  }
  return profit;
};

let x, y;

const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
// const prices = [2, 4, 1];

x = performance.now();
const data = maxProfit(prices);
y = performance.now();
console.log(data);
console.log(`Time taken: ${Math.floor(y - x)} ms`);
