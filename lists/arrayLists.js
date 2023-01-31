class ArrayList{

    constructor() {
        this.data = {}
        this.length = 0;
    }

    push(value){
     this.data[this.length] = value;
     this.length++
    }

    pop(){
      delete this.data[this.length - 1];
      this.length--
    }

    get(index){
     return this.data[index]
    }
    
    delete(index){
    const res = this.data[index];
    this._collapseTo(index);
    return res;
    }

    _collapseTo(index){
    for(let i = index; i < this.length; i++){
        this.data[i] = this.data[i + 1];
        console.log(this.data)
    }
    console.log(this.data[this.length - 1])
     delete this.data[this.length - 1];
     this.length--
    }
}

const array1 = new ArrayList();
array1.push(20);
array1.push(40);
array1.push(30);
array1.push(60);
array1.pop();
array1.delete(0);
console.log(array1)