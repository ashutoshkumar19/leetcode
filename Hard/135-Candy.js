import { performance } from "perf_hooks";
import { generateRandomInteger } from "../util.js";

const candy = (ratings) => {
  const len = ratings.length;
  const candies = [];
  candies[0] = 1;
  let count = 1;

  for (let i = 1; i < len; i++) {
    if (!candies[i]) {
      candies[i] = 1;
      count++;
    }

    if (ratings[i] > ratings[i - 1]) {
      const temp = candies[i];
      candies[i] = candies[i - 1] + 1;
      count += candies[i] - temp;
    }
  }

  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      const temp = candies[i];
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
      count += candies[i] - temp;
    }
  }

  return count;
};

//=====================================================

let x, y;

// const ratings = [1, 3, 2, 3, 1];
// const ratings = [2, 4, 3, 5, 1];
// const ratings = [5, 4, 3, 2, 1];
const ratings = [1, 3, 4, 2, 2, 4, 5, 0];

x = performance.now();

// const data = reversePairsBruteForce(ratings);
const count = candy(ratings);

y = performance.now();

console.log(count);

console.log(`Time taken: ${Math.floor(y - x)} ms`);
