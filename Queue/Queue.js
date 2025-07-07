class Queue {
    constructor() {
        this.storage = {};
        this.front = 0; // index of the first element
        this.rear = 0;  // index where new elements are added
    }

    // Enqueue: Add element to rear
    enqueue(value) {
        this.storage[this.rear] = value;
        this.rear++;
    }

    // Dequeue: Remove element from front
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        const removed = this.storage[this.front];
        delete this.storage[this.front];
        this.front++;
        return removed;
    }

    // Check if queue is empty
    isEmpty() {
        return this.rear === this.front;
    }

    // Return number of elements
    size() {
        return this.rear - this.front;
    }

    // Display all elements
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let result = "";
        for (let i = this.front; i < this.rear; i++) {
            result += this.storage[i] + " <- ";
        }
        console.log(result + "null");
    }
}
const queue= new Queue()
queue.enqueue(18)
queue.enqueue(28)
queue.enqueue(38)
queue.dequeue()
console.log(`Size of queue is ${queue.size()}`);
console.log(queue.isEmpty());


queue.display()