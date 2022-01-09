export class StackArray {
  constructor() {
    this.stack = [];
  }

  // get stack as an array
  getStack() {
    return this.stack;
  }

  // peek the top of stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // push new node
  push(value) {
    this.stack.push(value);
    return this.stack;
  }

  // pop the top node from stack
  pop() {
    this.stack.pop();
    return this.stack;
  }
}

// Write code here

const myStack = new StackArray();

myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.push('twitter');
myStack.push('linkedin');

console.log(myStack.getStack());

myStack.pop();
console.log(myStack.getStack());

console.log(myStack.peek());
