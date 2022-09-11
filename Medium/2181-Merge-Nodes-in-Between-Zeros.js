import { performance } from 'perf_hooks';
import { generateIntegerArray, generateString } from '../util.js';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  // get linked list as an array
  getList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return list;
  }

  // append new node
  append(val) {
    const newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }
}

function mergeNodes(head) {
  let total_val = 0;
  let start_node = null;
  let node = head;
  while (node) {
    if (node.val === 0) {
      if (start_node) {
        start_node.val = total_val;
        start_node.next = node.next;
        start_node = node.next;
      } else {
        start_node = node;
      }
      total_val = 0;
    } else {
      total_val += node.val;
    }
    node = node.next;
  }
  return head;
}

// Write code here
let x, y;

const list = [0, 3, 1, 0, 4, 5, 2, 0];
// const list = [0, 1, 0, 3, 0, 2, 2, 0];

const linkedList = new LinkedList();
for (const elem of list) {
  linkedList.append(elem);
}

console.log('list: ', JSON.stringify(linkedList.getList()));

x = performance.now();

const data = mergeNodes(linkedList.head);
console.log(data);

y = performance.now();

console.log(`\nTime taken: ${Math.floor(y - x)} ms`);
