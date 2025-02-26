class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = this.top;
    this.length = 0;
  }

  // get stack as an array
  getStack() {
    const list = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  // peek the top of stack
  peek() {
    return this.top !== null ? this.top.value : undefined;
  }

  // push new node
  push(value) {
    const newNode = new Node(value);
    if (this.top === null) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // pop the top node from stack
  pop() {
    if (this.top === null) {
      return this;
    }
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

// Write code here

const myStack = new StackLinkedList();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.push('twitter');
myStack.push('linkedin');

console.log(myStack.getStack());

myStack.pop();
console.log(myStack.getStack());

console.log(myStack.peek());
