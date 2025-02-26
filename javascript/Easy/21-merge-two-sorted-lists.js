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

function mergeTwoLists(node1, node2, get_head = true) {
  const mergedList = new LinkedList();
  while (node1 || node2) {
    if (node1 && node2) {
      if (node1.val <= node2.val) {
        mergedList.append(node1.val);
        node1 = node1.next;
      } else {
        mergedList.append(node2.val);
        node2 = node2.next;
      }
    } else if (node1) {
      mergedList.append(node1.val);
      node1 = node1.next;
    } else if (node2) {
      mergedList.append(node2.val);
      node2 = node2.next;
    }
  }

  return get_head ? mergedList.head : mergedList;
}

// Write code here
let x, y;

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

const linkedList1 = new LinkedList();
const linkedList2 = new LinkedList();
const get_head = false;

for (const elem of list1) {
  linkedList1.append(elem);
}
for (const elem of list2) {
  linkedList2.append(elem);
}

console.log('list1: ', linkedList1.getList());
console.log('list2: ', linkedList2.getList());

x = performance.now();

const merged_data = mergeTwoLists(linkedList1.head, linkedList2.head, get_head);
y = performance.now();

console.log('\nMerged List: ');
console.log(get_head ? JSON.stringify(merged_data) : merged_data.getList());

console.log(`\nTime taken: ${Math.floor(y - x)} ms`);
