class Node {
  data = "";
  previous = null;
  next = null;

  constructor(data, next = null, previous = null) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedListDoubly {
  head;
  size;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.head.previous = null;
    this.size++;
  }

  insertNext(data) {
    if (this.head === null) {
      this.insertFirst(data);
      return;
    }

    const node = new Node(data);
    let current;
    current = this.head;
    while (current.next) {
      // traverse till the end of the linked list
      current = current.next;
    }
    current.next = node; // point next pointer of the current to node
    node.previous = current; // point previous pointer of the node to current
    this.size++; // increment the size
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      console.log("The index is out of bounds...");
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      this.head.previous = null;
      this.size++;
      return;
    }

    const node = new Node(data);
    let current, previous;
    let count = 0;
    current = this.head;

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.previous = previous;
    node.next = current;
    current.previous = node;
    previous.next = node;
    this.size++;
  }

  getNodeAtIndex(index) {
    if (index > 0 && index > this.size) {
      console.log("The index is out of bounds...");
      return;
    }

    if (this.size === 0) {
      console.log("The linked list is empty...");
      return;
    }

    if (index === 0) {
      console.log(`The node at index ${index} is ${this.head.data}.`);
      return;
    }

    let current;
    current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(`The node at index ${index} is ${current.data}.`);
      }
      current = current.next;
      count++;
    }
  }

  removeNodeAtIndex(index) {
    if (index > 0 && index > this.size) {
      console.log("The index is out of bounds...");
      return;
    }

    if (this.size === 0) {
      console.log("The linked list is empty...");
      return;
    }

    let current, previous;
    let count = 0;
    current = this.head;

    if (index === 0) {
      this.head = current.next;
      current.previous = null;
      this.size--;
      return;
    }

    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    previous.next = current.next;
    current.previous = previous;
    this.size--;
  }

  // clears the LL
  clearList() {
    // sets head to null and resets size to 0
    this.head = null;
    this.size = 0;
  }

  printListData() {
    if (this.size === 0) {
      console.log("The linked list is empty...");
      return;
    }

    let current = this.head;
    let count = 0;
    while (current) {
      console.log(
        `Node ${count} --- ${current.data} --- ${
          current.previous ? current.previous.data : "null"
        }`
      );
      current = current.next;
      count++;
    }
  }
}

const ll = new LinkedListDoubly();
ll.insertFirst(100);
ll.insertNext(200);
ll.insertNext(300);
ll.insertAt(500, 2);
ll.insertNext(400);
ll.getNodeAtIndex(2);
//ll.removeNodeAtIndex(2);
ll.printListData();
ll.clearList();
ll.printListData();
