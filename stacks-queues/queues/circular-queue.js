class CircularQueue {
  capacity = 0;
  front = 0;
  rear = 0;
  size = 0;
  queue = [];

  constructor(capacity) {
    this.capacity = capacity;
  }

  isFull() {
    return this.size === this.capacity;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full...");
      return;
    }
    this.size++;
    this.queue[this.rear % this.capacity] = element;
    this.rear++;
    console.log(`Queue ${this.queue.join(",")}`);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    this.size--;
    this.queue[this.front % this.capacity] = null;
    this.front++;
    console.log(`Queue ${this.queue.join(",")}`);
  }

  printEntireQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty...");
      return;
    }
    console.log("########################################");
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i]) {
        console.log(`${this.queue[i]}\n`);
      }
    }
    console.log("########################################");
  }
}

const myQueue = new CircularQueue(5);
myQueue.enqueue("a");
myQueue.enqueue("b");
myQueue.enqueue("c");
myQueue.enqueue("d");
myQueue.enqueue("e");

myQueue.enqueue("f");

myQueue.dequeue();
myQueue.dequeue();

myQueue.enqueue("f");
myQueue.enqueue("g");

myQueue.printEntireQueue();
