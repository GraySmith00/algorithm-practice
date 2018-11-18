// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);

    let prevNode = this.head;
    let currNode = this.head.next;

    while (currNode.next) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = null;
  }

  insertLast(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currNode = this.head;

    while (currNode.next) {
      currNode = currNode.next;
    }

    currNode.next = newNode;
  }

  getAt(index) {
    let counter = 0;
    let currNode = this.head;

    while (currNode) {
      if (counter === index) return currNode;
      currNode = currNode.next;
      counter++;
    }

    return currNode;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.getAt(index - 1);
    if (!prevNode.next) return;
    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    let prevNode = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
  }

  forEach(fn) {
    if (!this.head) return;
    let index = 0;
    let currNode = this.head;
    while (currNode) {
      fn(currNode, index);
      currNode = currNode.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let currNode = this.head;
    while (currNode) {
      yield currNode;
      currNode = currNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
