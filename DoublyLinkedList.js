const Node = require("./Node");
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) {
      return;
    } else {
      let temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp = null;
    }
    this.length--;
  }
  shift() {
    if (!this.head) {
      return;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.head.prev = temp;
      temp.next = null;
    }
    this.length--;
  }
  peek() {
    if (!this.tail) {
      return;
    } else {
      return this.tail.val;
    }
  }
  unshift(val) {
    if (!this.head) {
      return;
    } else {
      return (this.head.val = val);
    }
  }
  //3
  get(index) {
    if (!this.head || index > this.length) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return;
    }
    if (index === this.length) {
      this.push(val);
      return;
    }
    let node = new Node(val);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    node.next = current.next;
    node.prev = current;
    current.next.prev = node;
    current.next = node;

    this.length++;
  }
  set(index, val) {
    if (!this.head || index > this.length) {
      return;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.val = val;
    }
  }
  remove(index) {
    if (!this.head || index > this.length) {
      return;
    }

    if (index === 0) {
      this.shift();
      return;
    }
    if (index === this.length - 1) {
      this.pop();
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
    this.length--;
  }
}
module.exports = DoublyLinkedList;
