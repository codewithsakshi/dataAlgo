class Tree {
    constructor(){
        this.root = null;
    }

    add(value){
        if(!this.root){
            this.root = new Node (value);
        }
        else{
            this.root.add(value);
        }
    }

    toObject(){
        return this.root
    }
}

class Node {
    constructor(value = null, left = null, right = null){
    this.value = value;
    this.right = right;
    this.left = left;
    this.height = 1;
    }

    add(value){
    if(value < this.value){
        // go left

        if(!this.left){
            this.left = new Node (value);
        } else{
            this.left.add(value)
        }
        if(!this.right || this.left.height > this.right.height){
            this.height = this.left.height + 1;
        }
    } else{
        if(!this.right){
            this.right = new Node (value);
        }else{
            this.right.add(value);
        }
        if(!this.left || this.right.height > this.left.height){
            this.height = this.right.height + 1
        }
    }
    this.balance();
    }

    balance(){
        const rightHeight = this.right ? this.right.height : 0;
        const leftHeight = this.left ? this.left.height : 0;

        if(leftHeight > rightHeight + 1){
            const leftRightHeight = this.left.right ? this.left.right.height : 0;
            const leftLeftHeight = this.left.left ? this.left.left.height : 0;

            if(leftRightHeight > leftLeftHeight){
                this.left.rotateRR();
            }
            this.rotateLL();
        }else if(rightHeight > leftHeight + 1){
            const rightRightHeight = this.right.right ? this.right.right.height : 0;
            const rightLeftHeight = this.right.left ? this.right.left.height : 0;

            if(rightLeftHeight > rightRightHeight){
                this.right.rotateLL();
            }
            this.rotateRR();
        }
    }

    rotateRR(){
          const valueBefore = this.value;
          const leftBefore = this.left;
          this.value = this.right.value
          this.left = this.right
          this.right = this.right.right;
          this.left.right = this.left.left;
          this.left.left = leftBefore;
          this.left.value = valueBefore;
          this.left.updateInNewLocation();
          this.updateInNewLocation();
    }

    rotateLL(){
        const valueBefore = this.value;
        const rightBefore = this.right;
        this.value = this.left.value;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }

    updateInNewLocation(){
        if (!this.right && !this.left) {
            this.height = 1;
          } else if (!this.right || (this.left && this.right.height < this.left.height)) {
            this.height = this.left.height + 1;
          } else {
            this.height = this.right.height + 1;
          }
    }
}

const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
const tree = new Tree();
nums.map(num => tree.add(num));

const objs = tree.toObject();
console.log(objs);

console.log(objs.value === 4);

    console.log(objs.left.value === 2);
    console.log(objs.left.left.value === 1);
    console.log(objs.left.left.left === null);
    console.log(objs.left.left.right === null);

    console.log(objs.left.right.value === 3);
    console.log(objs.left.right.left === null);
    console.log(objs.left.right.right === null);

    console.log(objs.right.value === 7);
    console.log(objs.right.left.value === 6);
    console.log(objs.right.left.right === null);

    console.log(objs.right.left.left.value === 5);
    console.log(objs.right.left.left.left === null);
    console.log(objs.right.left.left.right === null);

    console.log(objs.right.right.value === 9);
    console.log(objs.right.right.left.value === 8);
    console.log(objs.right.right.left.left === null);
    console.log(objs.right.right.left.right === null);
    console.log(objs.right.right.right.value === 10);
    console.log(objs.right.right.right.left === null);
    console.log(objs.right.right.right.right === null);