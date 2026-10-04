// stateless function

const lessCounter = (add) => {
    let count = 0
    count = count + add;
    return count;
}

// console.log(lessCounter(2)) // 2 X - 2 O
// console.log(lessCounter(5)) // 7 X - 5 O

// closures

const createCounter = () => {
    let count = 0;

    return (add) => {
        count = count + add;
        return count;
    }
}

// Closures: A kind of function that can access references from outside its lexical enviroment and can interact with it.

const counter = createCounter();

// console.log(counter(2)) // 2
// console.log(counter(5)) // 7


// ======= Class and constructors ========

// Class: A template of object, which can be used to reproduce another object when needed.

// Constructor: constructs the object and holds the needed data intially.

// this: Defines the reference used in this specific class/object/function only, not on global.

class ClassCounter {

    // construct an object with, initial value = this.count = count
    constructor (count) {
        this.count = count
    }

    // created sum fn to add values
    sum(add) {
        this.count = this.count + add;
    }

    // created print fn for console.log
    print() {
        console.log(this.count)
    }    
}

//Create a counter with initial value = 0
const counter1 = new ClassCounter(0);

//add 2 + 0 > count = 2
counter1.sum(2);
//add 5 + 2 > count = 7
counter1.sum(5);

// console.log count = 7
counter1.print()

//Create another counter with initial value = 10
const counter2 = new ClassCounter(10);
// add 30 + 10 > count = 40
counter2.sum(30);

// Console log count = 40
counter2.print();