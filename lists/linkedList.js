class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(value) {
    const node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
      this.size++;
      return this.head;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
  }

  insertLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
      return;
    }
  }

  insertAt(index, value){
    // 3 => 4 => 5 => 3
  if(index < 0 || index > this.size){
    return "please enter valid index"
  }else{
    let node = new Node(value);
    let current = this.head;
    let tracker = 1;
    let prev;
    while(tracker < index){
        prev = current
        current = current.next
        tracker++
    }
    prev.next = node;
    node.next = current
    this.size++
    return
    
  }
  }

  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str = str + "==>" + current.value;
      current = current.next;
    }
    return str;
  }

  printSize(){
    return this.size;
  }

  removeFirst(){
    if(!this.head) return
    else if(!this.head.next){
        this.head = null;
        this.size--
        return this.head
    } else{
      this.head = this.head.next
      this.size--
      return this.head
    }
  }
  
  removeLast(){
    if(!this.head) return null;
    else if(!this.head.next) {
        this.head = null;
        this.size--
        return
    }else{
        let current = this.head;
        let prev;
        while(current.next){
            prev = current
            current = current.next
        }
        prev.next = null;
        this.size--
        return
    }
  }

  removeFrom(index){
   if(index > this.size || index < 1){
    return "please enter a valid Index"
   }else{
    let tracker = 1;
    let current = this.head;
    let prev
    while(tracker < index){
        prev = current;
        current = current.next;
        tracker++
    }
    prev.next = current.next;
    this.size--
    return
   }
  }

  removeElement(value){

    // 1 => 2 => 3 => 4

   if(this.head.value === value){
    this.head = this.head.next
    this.size--
    return
   }else{
    let current = this.head;
    let prev;
    
    while(current.value !== value){
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
    this.size--
    return
   }
  }
}

const list = new LinkedList();
console.log(list.insertFirst(1));
console.log(list.insertFirst(2));
console.log(list.insertFirst(3));
console.log(list.insertLast(4));
console.log(list.insertAt(2, 4));
console.log(list.removeFrom(3));
console.log(list.removeElement(3));
console.log(list.printList());
console.log(list.printSize())
