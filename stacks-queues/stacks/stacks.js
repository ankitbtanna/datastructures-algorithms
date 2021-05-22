class Stack {
    capacity = 0;
    top = 0;
    stack = [];

    constructor(capacity) {
        this.capacity = capacity;
        this.stack = new Array(this.capacity).fill(undefined);
    }

    isEmpty() {
        return this.top === 0;
    }

    isFull() {
        return this.top === this.capacity;
    }

    push(element) {
        if (this.isFull()) {
            console.log('Stack Overflow...');
            return;
        }

        this.stack[this.top++] = element;
        console.log(`${element} pushed into the stack.`);
    }
    
    pop() {
        if (this.isEmpty()) {
            console.log('No element in Stack...');
            return;
        }
        
        const poppedElement = this.stack[--this.top];
        this.stack[this.top] = undefined;
        console.log(`${poppedElement} popped from the stack.`);
    }

    getTopElement() {
        console.log(`${this.stack[this.top]} is the top element.`);
    }

    getBottomElement() {
        console.log(`${this.stack[0]} is the bottom element.`);
    }

    printFullStack() {
        if (this.isEmpty()) {
            console.log("No element in Stack...");
            return;
        }

        console.log('##############################################');
        for (let i = 0; i < this.top; i++) {
            console.log(`${this.stack[i]}\n`);
        }
        console.log("##############################################");
    }
}