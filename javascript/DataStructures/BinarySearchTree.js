class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }

  // get BST
  getTree() {
    return JSON.stringify(this.root);
  }

  // lookup by value in the BST
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return false;
  }

  // insert a value in BST
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode.left || currentNode.right) {
        if (value >= currentNode.value && currentNode.right) {
          currentNode = currentNode.right;
        } else if (value < currentNode.value && currentNode.left) {
          currentNode = currentNode.left;
        } else {
          break;
        }
      }
      if (value >= currentNode.value) {
        currentNode.right = newNode;
      } else {
        currentNode.left = newNode;
      }
    }
    this.nodeCount++;
    return this;
  }
}

// Write code here

// const myBST = new LinkedList(1);
const myBST = new BinarySearchTree();

myBST.insert(9);
myBST.insert(4);
myBST.insert(6);
myBST.insert(20);
myBST.insert(170);
myBST.insert(15);
myBST.insert(1);

console.log(myBST.getTree());

console.log(myBST.lookup(90));

// myBST.reverse();
// console.log('Reversed list: ', myBST.getList());
