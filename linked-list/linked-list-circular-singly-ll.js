class Node {
  data = "";
  next = null;

  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class CircularSinglyLinkedList {
  head = null;
  last = null;
  size = 0;

  constructor() {
    this.head = null;
    this.last = null;
    this.size = 0;
  }

  insertFirst(data) {
    const node = new Node(data);
    this.head = node;
    this.last = node;
    this.last.next = this.head;
    this.size++;
  }

  insertNext(data) {
    if (this.head === null && this.last === null && this.size === 0) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    node.next = this.last.next;
    this.last.next = node;
    this.last = node;
    this.size++;
    return;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      console.log("This is beyond linked lists range...");
      return;
    }

    const node = new Node(data);
    if (index === 0) {
      this.head = node;
      this.size++;
      this.last.next = this.head;
      return;
    }

    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    previous.next = node;
    node.next = current;

    // is this the last element of LL
    if (index === this.size - 1) {
      current.next = this.head;
    }

    this.size++;
  }

  getNodeAtIndex(index) {
    if (index > 0 && index > this.size) {
      console.log("This is beyond linked lists range...");
      return;
    }

    if (index === 0) {
      console.log(`Node at index ${index} is ${this.head.data}`);
      return;
    }

    let current = this.head;
    let count = 0;
    while (count <= index) {
      if (count === index) {
        console.log(`Node at index ${index} is ${current.data}`);
      }
      current = current.next;
      count++;
    }
  }

  removeNodeAtIndex(index) {
    if (this.size === 0) {
      console.log("This LL is empty...");
      return;
    }

    if (index > 0 && index > this.size) {
      console.log("This is beyond linked lists range...");
      return;
    }

    let current = this.head;
    if (index === 0) {
      this.head = current.next;
      this.last.next = this.head;
      this.size--;
      return;
    }

    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    // is this the last element of LL
    if (index === this.size - 1) {
      previous.next = this.head;
    } else {
      previous.next = current.next;
    }

    this.size--;
  }

  clearList() {
    this.head = null;
    this.size = 0;
    this.last = null;
  }

  printListData() {
    if (this.size === 0) {
      console.log("Linked list is empty...");
      return;
    }

    let current = this.head;
    let count = 0;
    while (count < this.size) {
      console.log(
        `${count}---${current.data}---${
          this.last.next ? this.last.next.data : "null"
        }`
      );
      current = current.next;
      count++;
    }
  }
}

const ll = new CircularSinglyLinkedList();
ll.insertFirst(100);
ll.insertNext(200);
ll.insertNext(300);
ll.insertNext(400);
ll.insertNext(500);
ll.getNodeAtIndex(4);
//ll.removeNodeAtIndex(4);
ll.printListData();
//ll.clearList();
//ll.printListData();
