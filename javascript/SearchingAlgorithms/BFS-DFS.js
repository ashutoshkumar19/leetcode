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
  getTree(format = false) {
    return JSON.stringify(this.root, null, format ? 2 : 0);
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

  // Breadth First Search
  BFS() {
    let currentNode = this.root;
    const list = [];
    const queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  // Breadth First Search Recursive
  BFSRecursive(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.BFSRecursive(queue, list);
  }

  // Depth First Search - InOrder traversal
  DFSInOrder() {
    return traverseInOrder(this.root, []);
  }
  // Depth First Search - PreOrder traversal
  DFSPreOrder() {
    return traversePreOrder(this.root, []);
  }
  // Depth First Search - PostOrder traversal
  DFSPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

// traverse in-order
function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

// traverse pre-order
function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

// traverse post-order
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

// Write code here

const myBST = new BinarySearchTree();

const values = [9, 4, 6, 20, 170, 15, 1];
for (const value of values) {
  myBST.insert(value);
}

console.log(myBST.getTree());
//         9
//    4         20
//  1   6    15    170

console.log('BFS: ', myBST.BFS());

console.log('\nBFS Recursive: ', myBST.BFSRecursive([myBST.root], []));

console.log('\nDFS InOrder: ', myBST.DFSInOrder());
console.log('\nDFS PreOrder: ', myBST.DFSPreOrder());
console.log('\nDFS PostOrder: ', myBST.DFSPostOrder());

// console.log(myBST.lookup(90));
