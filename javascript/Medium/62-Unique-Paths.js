import { performance } from 'perf_hooks';

/* ---------------------------- Recursive solution ---------------------------- */
const uniquePathsRecursive = () => {
  return function uniquePaths(m, n, p, q, paths) {
    p = p || 0;
    q = q || 0;
    paths = paths || 0;
    if (p === m - 1 && q === n - 1) {
      return 1;
    } else if (p >= m || q >= n) {
      return 0;
    }
    return uniquePaths(m, n, p, q + 1, paths) + uniquePaths(m, n, p + 1, q, paths);
  };
};

/* -------- Recursive solution with memoization (Dynamic Programming) -------- */
function uniquePathsRecursiveMemoized() {
  const hashmap = {};
  return function uniquePaths(m, n, p, q, paths) {
    let key = `${p}-${q}`;
    if (key in hashmap) {
      return hashmap[key];
    } else {
      p = p || 0;
      q = q || 0;
      paths = paths || 0;
      if (p === m - 1 && q === n - 1) {
        return 1;
      } else if (p >= m || q >= n) {
        return 0;
      }
      hashmap[key] = uniquePaths(m, n, p, q + 1, paths) + uniquePaths(m, n, p + 1, q, paths);
      return hashmap[key];
    }
  };
}

/* -------------------------- Combinatorics approach -------------------------- */
const uniquePathsCombinatorics = () => {
  // (m+n-2)C(m-1)
  const hashmap = {};
  return function (m, n) {
    return factorial(m + n - 2, hashmap) / (factorial(m - 1, hashmap) * factorial(n - 1, hashmap));
  };
};

const factorial = (num, hashmap) => {
  hashmap = hashmap || {};
  if (hashmap[num]) {
    return hashmap[num];
  }
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * (hashmap[i] ? hashmap[i] : i);
    hashmap[i] = factorial;
  }
  return factorial;
};

/* ------------------------------------------------------------------------------- */
let x, y;

const m = 50;
const n = 50;

x = performance.now();

// const data = uniquePathsRecursive()(m, n);
// const data = uniquePathsRecursiveMemoized()(m, n);
const data = uniquePathsCombinatorics()(m, n);
// const data = factorial(5, hashmap);

console.log(data);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
