// create a class tree
// create a class node
// We have one node that is the root. root can have two values left & right if value is greate that root that this will be right child and if value is lesser than root that it will be left child.


class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      let current = this.root;

      while (true) {
        if (current.value > value) {
          // go left
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(value);
            break;
          }
        } else {
          // go right

          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(value);
            break;
          }
        }
      }
    }
    return this;
  }

  toObject(){
    return this.root
  }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new BinaryTree();
const result = nums.map(num => tree.add(num));
const objs = tree.toObject();
console.log("result",objs);

    console.log(objs.value === 3);
    console.log(objs.left.value === 1);
    console.log(objs.left.left === null);

    console.log(objs.left.right.value === 2);
    console.log(objs.left.right.left === null);
    console.log(objs.left.right.right === null);
    
    console.log(objs.right.value === 7);
    console.log(objs.right.left.value === 4);
    console.log(objs.right.left.left === null);
    console.log(objs.right.left.right.value === 6);
    console.log(objs.right.left.right.left.value === 5);
    console.log(objs.right.left.right.left.right === null);
    console.log(objs.right.left.right.left.left === null);
    console.log(objs.right.right.value === 10);
    console.log(objs.right.right.right === null);
    console.log(objs.right.right.left.value === 9);
    console.log(objs.right.right.left.right === null);
    console.log(objs.right.right.left.left.value === 8);   
    console.log(objs.right.right.left.left.right === null);
    console.log(objs.right.right.left.left.left === null);