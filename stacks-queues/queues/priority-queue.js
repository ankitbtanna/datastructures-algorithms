class Item {
    value = undefined;
    priority = 0;

    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    size = 0;
    capacity = 0;
    queue = [];
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(this.capacity).fill(undefined);
    }

    isFull() {
        return this.size === this.capacity;
    }
    
    isEmpty() {
        return this.size === 0;
    }

    insertItem(value, priority) {
        if (this.isFull()) {
            console.log("Queue is full...");
            return;
        }

        const item = new Item(value, priority);
        this.queue[this.size] = item;
        this.size++;
    }

    getHighestPriorityItem() {
        // return the index of the highest priority item
        // if 2 items have same priority then get the first item inserted in the queue
        // It has to be searched and broken linearly
        let highestPriorityIndex = 0;
        let highestPriority = 0;
        for (let i = 0; i < this.size; i++) {
            if (this.queue[i].priority > highestPriority) {
                highestPriorityIndex = i;
                highestPriority = this.queue[i].priority;
            }
        }
        console.log(`Highest priority item is ${JSON.stringify(this.queue[highestPriorityIndex])} at index ${highestPriorityIndex}.`)
        return highestPriorityIndex;
    }

    deleteHighestPriorityItem() {
        if (this.isEmpty()) {
          console.log("Queue is empty...");
          return;
        }
        const highestPriorityIndex = this.getHighestPriorityItem();
        this.queue.splice(highestPriorityIndex, 1);
        this.queue[this.size] = undefined;
        --this.size;
    }

    getLowestPriorityItem() {
        let lowestPriorityIndex = 0;
        let lowestPriority = 0;
        for (let i = 0; i < this.size; i++) {
          if (lowestPriority >= this.queue[i].priority) {
            lowestPriorityIndex = i;
            lowestPriority = this.queue[i].priority;
          }
        }
        console.log(
          `Lowest priority item is ${JSON.stringify(
            this.queue[lowestPriorityIndex]
          )} at index ${lowestPriorityIndex}.`
        );
        return lowestPriorityIndex;
    }

    deleteLowestPriorityItem() {
        if (this.isEmpty()) {
          console.log("Queue is empty...");
          return;
        }
        const lowestPriorityIndex = this.getLowestPriorityItem();
        this.queue.splice(lowestPriorityIndex, 1);
        this.queue[this.capacity - 1] = undefined;
        --this.size;
    }

    printEntireQueue() {
        if (this.isEmpty()) {
            console.log('Queue is empty...');
            return;
        }
        console.log('###########################################');
        for (let i = 0; i < this.size; i++) { 
            console.log(`${this.queue[i].value}---${this.queue[i].priority}\n`);
        }
        console.log("###########################################");
    }
}

var myQueue = new PriorityQueue(5);

myQueue.insertItem("a", 0);
myQueue.insertItem("b", 0);
myQueue.insertItem("c", 1);
myQueue.insertItem("d", 1);
myQueue.insertItem("e", 0);

myQueue.deleteHighestPriorityItem();
myQueue.deleteHighestPriorityItem();
myQueue.deleteHighestPriorityItem();
myQueue.deleteHighestPriorityItem();
myQueue.deleteHighestPriorityItem();
myQueue.deleteHighestPriorityItem();

myQueue.printEntireQueue();