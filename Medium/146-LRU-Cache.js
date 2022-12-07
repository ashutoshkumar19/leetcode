import { performance } from 'perf_hooks';

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(max_length) {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
    this.max_length = max_length || 0;
    this.hashmap = {};
  }

  get(key) {
    const node = this.hashmap[key];
    if (node) {
      if (node == this.head && this.length > 1) {
        this.head = node.next;
        node.next.prev = null;
        node.next = null;
      }
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      return node.value;
    }
    return -1;
  }

  put(key, value) {
    if (this.length === this.max_length) {
      delete this.hashmap[this.head.key];
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    let node;
    if (this.hashmap[key]) {
      node = this.hashmap[key];
      node.value = value;
      if (node == this.head && this.length > 1) {
        this.head = node.next;
        node.next.prev = null;
        node.next = null;
      }
      if (node.prev) {
        node.prev.next = node.next;
      }
      if (node.next) {
        node.next.prev = node.prev;
      }
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      node = new Node(key, value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.hashmap[key] = node;
      this.length++;
    }
    return node;
  }
}

/* ------------------------------------------------------------------------------- */
let x, y;

// const m = ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'];
// const n = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];

// const m = ['LRUCache', 'put', 'get'];
// const n = [[1], [2, 1], [2]];

const m = ['LRUCache', 'put', 'put', 'get', 'put', 'put', 'get'];
const n = [[2], [2, 1], [2, 2], [2], [1, 1], [4, 1], [2]];

const len = m.length;
const output = [];

x = performance.now();
let lruCache;

for (let i = 0; i < len; i++) {
  console.log('\n==============================');
  if (m[i] === 'LRUCache') {
    lruCache = new LRUCache(n[i][0]);
    output.push(null);
  } else if (m[i] === 'put') {
    console.log('\n');
    console.log(`key: ${n[i][0]}\tvalue:${n[i][1]}`);
    lruCache.put(n[i][0], n[i][1]);
    output.push(null);
  } else if (m[i] === 'get') {
    const value = lruCache.get(n[i][0]);
    console.log(`\n --> GET ${n[i][0]}: ${value}`);
    output.push(value);
  }
  console.log(lruCache);
}

console.log(output);

y = performance.now();
console.log(`Time taken: ${Math.floor(y - x)} ms`);
