import { performance } from 'perf_hooks';

function flatten(obj, key_str, val, new_obj, is_recursive = false) {
  for (const key in obj) {
    const child = obj[key];
    // if (child && typeof child !== 'object') {
    if (
      child !== undefined &&
      (typeof child !== 'object' || child === null || Array.isArray(child))
    ) {
      val = child;
      new_obj[appendKey(key_str, key)] = val;
    } else if (Object.keys(child).length) {
      let new_key_str = key_str;
      if (is_recursive) {
        new_key_str += !key_str ? key : `.${key}`;
      } else {
        new_key_str = key;
      }
      const data = flatten(child, new_key_str, val, new_obj, true);
    }
  }
  return new_obj;
}

function appendKey(old_key, new_key) {
  return !old_key ? new_key : `${old_key}.${new_key}`;
}

let obj = {
  a: {
    b: {
      c: 'C',
      d: 'D',
      array: [1, 2, 3, 4, 5],
      none: null,
    },
    e: 'E',
    h: true,
  },
  f: 'F',
  g: 'G',
  i: 5,
};

const x = performance.now();

const flatten_data = flatten(obj, '', null, {}, false);

const y = performance.now();

console.log(flatten_data);

console.log(`Dynamic recursive time taken: ${Math.floor(y - x)} ms`);
