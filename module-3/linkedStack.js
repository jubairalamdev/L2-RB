//============ Linked List Codes ===============

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

    print() {
        const arr = []
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }

        console.log(arr.join(" -> "))
    }
}


// ================= Linked List Stack Codes ===============

class Stack {

    // construct an initial empty array
    constructor() {
        this.items = new LinkedList()
    }

    // push fn for pushing the value at last
    // O(1)
    push(value) {
        this.items.append(value)
    }

    // pop fn for pop out the last value
    // O(1)
    pop() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items.remove(this.items.length - 1)
    }

    // peek the last value of the array
    // O(1)
    peek() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items.tail
    }

    // check wether an array is empty
    // O(1)
    isEmpty() {
        return this.items.length === 0
    }

    // O(n)
    log() {
        this.items.print()
    }
}

const stack = new Stack()

stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()

stack.log()