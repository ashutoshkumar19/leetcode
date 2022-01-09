class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  // get linked list as an array
  getList() {
    const list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  // append new node
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// traverse to position
var traverse = function (linkedListObj, position) {
  let currentNode = null;
  for (let i = 0; i <= position; i++) {
    if (i === 0) {
      currentNode = linkedListObj;
    } else if (currentNode !== null) {
      currentNode = currentNode.next;
    } else {
      return currentNode;
    }
  }
  return currentNode;
};

// reverse the linked list
var reverseBetween = function (linkedListObj, left, right) {
  if (linkedListObj === null) {
    return linkedListObj;
  }
  let startNode = traverse(linkedListObj, left - 2);
  let leftNode = traverse(linkedListObj, left - 1);
  let rightNode = traverse(linkedListObj, right - 1);
  let endNode = rightNode.next;

  let temp = leftNode;
  let ptr;
  for (let i = 0; i < right - left; i++) {
    ptr = temp.next;
    temp.next = ptr.next;
    ptr.next = leftNode;
    leftNode = ptr;
  }
  rightNode = temp;

  if (startNode) {
    startNode.next = leftNode;
  } else {
    linkedListObj = leftNode;
  }
  if (rightNode) {
    rightNode.next = endNode;
  }
  return linkedListObj;
};

// Write code here
const myLinkedList = new LinkedList();

// const values = [1, 2, 3, 7, 8, 4, 5];
// const left = 2;
// const right = 6;

// const values = [5];
// const left = 1;
// const right = 1;

const values = [3, 5];
const left = 1;
const right = 2;

for (const value of values) {
  myLinkedList.append(value);
}

console.log(myLinkedList.getList());

const reversed = reverseBetween(myLinkedList.head, left, right);
console.log('reversed: ', reversed);
