class Queue {
  capacity = 0;
  front = 0;
  rear = 0;
  size = 0;
  queue = [];

  constructor(capacity) {
    this.capacity = capacity;
    this.rear = this.capacity - 1;
    this.queue = new Array(this.capacity).fill(undefined);
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  getFrontElement() {
    console.log(`${this.queue[this.front]} is the front element.`);
  }

  getRearElement() {
    console.log(`${this.queue[this.rear]} is the rear element.`);
  }

  getQueueSize() {
    console.log(`Size of the queue is ${this.size}.`);
  }

  printEntireQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    console.log("###########################################");
    for (let i = this.front; i <= this.rear; i++) {
      console.log(`${this.queue[i]}\n`);
    }
    console.log("###########################################");
  }

  // Main methods begin from here
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full...");
      return;
    }
    this.size++;
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = element;
    console.log(`${element} inserted at position ${this.rear}.`);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    this.size--;
    const elementDequeued = this.queue[this.front];
    this.queue[this.front] = undefined;
    console.log(`${elementDequeued} removed from front.`);
    this.front = (this.front + 1) % this.capacity;
  }
}
