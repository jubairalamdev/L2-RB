class Stack {

    // construct an initial empty array
    constructor() {
        this.items = []
    }

    // push fn for pushing the value at last
    // O(1)
    push(value) {
        this.items.push(value)
    }

    // pop fn for pop out the last value
    // O(1)
    pop() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items.pop()
    }

    // peek the last value of the array
    // O(1)
    peek() {
        // if array is empty return undefined
        if (this.isEmpty()) {
            return undefined
        }

        return this.items[this.items.length - 1]
    }

    // check wether an array is empty
    // O(1)
    isEmpty() {
        return this.items.length === 0
    }

    // O(n)
    print() {
        console.log(this.items.slice().reverse().join(" -> "))
    }
}

const stack = new Stack();

console.log(stack.peek()) // undefined
console.log(stack.isEmpty()) // true

stack.print() // []

stack.push(10) 
stack.push(20)
stack.push(30)

stack.print() // [10,20,30]

console.log(stack.peek()) // 30

stack.pop()

stack.print() // [10,20]