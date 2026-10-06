// ========= Linked List Codes =============

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this
    }

    remove(index) {

        if (index === 0) {

            const removedItem = this.head.value;
            this.head = this.head.next

            if(this.length === 1) {
                this.tail = null
            }

            this.length--
            return removedItem
        }

        const leadingNode = this._traverseToIndex(index)
        const nodeToRemove = leadingNode.next
        
        leadingNode.next = nodeToRemove.next

        if(leadingNode.next === null) {
            this.tail = leadingNode
        }

        return nodeToRemove.value
    }

    _traverseToIndex(index) {
        let currentNode = this.head;

        let count = 0
        while (count !== index - 1) {
            currentNode = currentNode.next;
            count++
        }

        return currentNode
    }

    log() {
        const arr = []
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }

        console.log("Start -> ", arr.join(" -> "), " -> End")
    }
}


// =========== Linked List Queue Codes =============

class Queue {

    // construct an initial empty array
    constructor() {
        this.items = new LinkedList()
    }

    // O(1)
    enqueue(value) {
        this.items.append(value)
    }

    // O(n)
    dequeue() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items.remove(0)
    }

    // O(1)
    peek() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items.head
    }

    // check wether an array is empty
    // O(1)
    isEmpty() {
        return this.items.length === 0
    }

    // O(n)
    print() {
        this.items.log()
    }
}

const queue = new Queue()

queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(6)
queue.dequeue()

queue.print()