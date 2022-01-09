export class QueueArray {
  constructor() {
    this.queue = [];
  }

  // get queue as an array
  getQueue() {
    return this.queue;
  }

  // peek the front of queue
  peek() {
    return this.queue ? this.queue[0] : undefined;
  }

  // enqueue new node
  enqueue(value) {
    this.queue.push(value);
    return this.queue;
  }

  // dequeue the front node from queue
  dequeue() {
    if (this.queue.length === 0) {
      return this.queue;
    }
    this.queue.shift();
    return this.queue;
  }
}

// Write code here

const myQueue = new QueueArray();

myQueue.enqueue('google');
myQueue.enqueue('udemy');
myQueue.enqueue('discord');
myQueue.enqueue('twitter');
myQueue.enqueue('linkedin');

console.log(myQueue.getQueue());

myQueue.dequeue();
console.log(myQueue.getQueue());

console.log(myQueue.peek());
