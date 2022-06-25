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

  // Check if the BST is valid or not
  /* A valid BST is defined as follows:
    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees. 
  */
  isValidBST(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      this.isValidBST(node.left, min, node.value - 1) &&
      this.isValidBST(node.right, node.value + 1, max)
    );
  }
}

// Write code here

const myBST = new BinarySearchTree();

const values = [5, 1, 4, null, null, 3, 6];
// const values = [2, 1, 3];
// const values = [0];
for (const value of values) {
  myBST.insert(value);
}

console.log(myBST.getTree());

console.log('\nIs BST Valid: ', myBST.isValidBST(myBST.root, -Infinity, Infinity));
