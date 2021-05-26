class Dequeue {
  capacity = 0;
  size = 0;
  queue = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    this.size === 0;
  }

  insertFront(element) {
    if (this.isFull()) {
      console.log("Queue is full...");
      return;
    }
    this.queue.unshift(element);
    this.size++;
    console.log(`Queue: ${this.queue.join(",")}`);
  }

  insertRear(element) {
    if (this.isFull()) {
      console.log("Queue is full...");
      return;
    }
    this.queue.push(element);
    this.size++;
    console.log(`Queue: ${this.queue.join(",")}`);
  }

  deleteFront() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    this.queue.shift();
    this.size--;
    console.log(`Queue: ${this.queue.join(",")}`);
  }

  deleteRear() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    this.queue.pop();
    this.size--;
    console.log(`Queue: ${this.queue.join(",")}`);
  }

  getFront() {
    console.log(`Element at the front is ${this.queue[0]}.`);
  }

  getRear() {
    console.log(`Element at the rear is ${this.queue[this.queue.length - 1]}.`);
  }

  printEntireQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    console.log("###########################################");
    for (let i = 0; i < this.queue.length; i++) {
      console.log(this.queue[i]);
    }
    console.log("###########################################");
  }
}

const myDequeue = new Dequeue(5);
myDequeue.insertFront("a");
myDequeue.insertFront("b");
myDequeue.insertRear("c");
myDequeue.insertRear("d");
myDequeue.insertFront("e");
myDequeue.insertFront("f");

myDequeue.deleteFront();
myDequeue.deleteRear();

myDequeue.printEntireQueue();
