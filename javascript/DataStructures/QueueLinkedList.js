class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class QueueLinkedList {
  constructor() {
    this.front = null;
    this.rear = this.front;
    this.length = 0;
  }

  // get queue as an array
  getQueue() {
    const list = [];
    let currentNode = this.front;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return list;
  }

  // peek the front of queue
  peek() {
    return this.front !== null ? this.front.value : undefined;
  }

  // enqueue new node
  enqueue(value) {
    const newNode = new Node(value);
    if (this.rear === null) {
      this.front = newNode;
      this.rear = this.front;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
    return this;
  }

  // dequeue the front node from queue
  dequeue() {
    if (this.front === null) {
      return this;
    }
    this.front = this.front.next;
    this.length--;
    return this;
  }
}

// Write code here

const myQueue = new QueueLinkedList();

myQueue.enqueue('google');
myQueue.enqueue('udemy');
myQueue.enqueue('discord');
myQueue.enqueue('twitter');
myQueue.enqueue('linkedin');

console.log(myQueue.getQueue());

myQueue.dequeue();
console.log(myQueue.getQueue());

console.log(myQueue.peek());
