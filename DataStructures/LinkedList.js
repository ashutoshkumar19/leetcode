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

  // traverse to position
  traverse(position) {
    let currentNode = null;
    for (let i = 0; i <= position; i++) {
      if (i === 0) {
        currentNode = this.head;
      } else if (currentNode !== null) {
        currentNode = currentNode.next;
      } else {
        return currentNode;
      }
    }
    return currentNode;
  }

  // lookup value at any position
  lookup(position) {
    let currentNode = this.traverse(position);
    return currentNode ? currentNode.value : undefined;
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

  // prepend new node
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // insert a node at any position
  insert(value, position) {
    if (position <= 0) {
      return this.prepend(value);
    } else if (position >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    let currentNode = this.traverse(position - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return this;
  }

  // remove a node from any position
  remove(position) {
    if (position < 0 || position >= this.length) {
      return this;
    }
    let currentNode = this.traverse(position - 1);
    let removeNode;
    if (position === 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    } else {
      removeNode = currentNode.next;
      currentNode.next = removeNode.next;
    }
    this.length--;
    return this;
  }

  // reverse the linked list
  reverse() {
    if (this.head === null) {
      console.log('returning');
      return this;
    }
    let temp = this.head;
    let ptr;
    for (let i = 0; i < this.length - 1; i++) {
      ptr = temp.next;
      temp.next = ptr.next;
      ptr.next = this.head;
      this.head = ptr;
    }
    this.tail = temp;
    return this;
  }
}

// Write code here

// const myLinkedList = new LinkedList(1);
const myLinkedList = new LinkedList();

myLinkedList.prepend(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);

console.log(myLinkedList.getList());

myLinkedList.reverse();
console.log('Reversed list: ', myLinkedList.getList());
