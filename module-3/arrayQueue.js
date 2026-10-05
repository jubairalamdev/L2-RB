// enqueue: create new queue inside
// dequeue: remove a queue

// queue is FIFO (First in First out)

// 2 approach of queue: array, linked list


// === Array Implementation ===
class Queue {

    // construct an initial empty array
    constructor() {
        this.items = []
    }

    // O(1)
    enqueue(value) {
        this.items.push(value)
    }

    // O(n)
    dequeue() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items.shift()
    }

    // O(1)
    peek() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[0]
    }

    // check wether an array is empty
    // O(1)
    isEmpty() {
        return this.items.length === 0
    }

    // O(n)
    print() {
        console.log("Start -> ", this.items.join(" -> "), " -> End")
    }
}
const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

queue.dequeue()

queue.print()