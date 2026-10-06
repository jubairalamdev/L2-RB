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

    prepend(value) {

        const newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this
    }

    insert(index, value) {

        if (index < 0 || index > this.length) {
            console.error("Index out of bound!")
            return undefined;
        }

        if (index === 0) {
            return this.prepend(value);
        }

        if (index === this.lenth) {
            return this.append(value);
        }

        const leadingNode = this._traverseToIndex(index)
        const holdingNode = leadingNode.next

        const newNode = new Node(value);

        leadingNode.next = newNode;
        newNode.next = holdingNode; 
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

        console.log(arr.join(" -> "), "-> null ")
    }
}


const linkedList = new LinkedList()

linkedList.append("A").append("B").append("C").append("D")

linkedList.remove(2);





linkedList.remove(2)
linkedList.print()