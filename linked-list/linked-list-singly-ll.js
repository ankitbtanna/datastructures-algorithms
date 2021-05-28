class Node {
    data = '';
    next = null;

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    head;
    size;
    
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert next node
    insertNext(data) {
        let node = new Node(data);
        let current;

        // if empty then make it empty
        if (this.head === null) {
            this.head = node;
            return;
        }

        // if not empty, go till the end of LL
        current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        // index is out of range
        if (index > 0 && index > this.size) {
            console.log('This is beyond linked lists range...')
            return;
        }

        // index is the first element
        if (index === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }

        // all the other cases
        let current, previous;
        let count = 0;

        current = this.head;            // Always point current to this.head because LL has to be traversed from the beginning
        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }
        const node = new Node(data);
        node.next = current;
        previous.next = node;
    }

    // Get at index
    getNodeAtIndex(index) {
        if (index > this.size) {
            console.log('Index is out of range...');
            return;
        }

        if (index === 0) {
            console.log(`Node at index ${index} is ${this.head.data}`);
            return;
        }
        
        let current;
        let count = 0;
        current = this.head;
        while (current) {
            if (count === index) {
                console.log(`Node at index ${index} is ${current.data}`);
            }
            current = current.next;
            count++;
        }
        return;
    }

    // Remove at index
    removeNodeAtIndex(index) {
        if (index > this.size) {
          console.log("Index is out of range...");
          return;
        }

        let current, previous;
        let count = 0;
        current = this.head;

        if (index === 0) {
            this.head = current.next;
            this.size--;
            return;
        }

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        previous.next = current.next;
        this.size--;
    }

    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print the list data
    printListData() {
        if (this.size === 0) {
            console.log('Linked list is empty...');
            return;
        }

        let current = this.head;
        let count = 0;
        while (current) {
            console.log(`${count}---${current.data}`);
            current = current.next;
            count++;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertNext(200);
ll.insertNext(400);
ll.insertAt(500,2);
ll.insertNext(400);
ll.getNodeAtIndex(2);
ll.removeNodeAtIndex(2);
ll.printListData();
ll.clearList();
ll.printListData();