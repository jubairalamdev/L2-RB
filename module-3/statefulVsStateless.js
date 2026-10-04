// Stateful VS Stateless

// stateless

const lessCounter = (add) => {
    let count = 0
    count = count + add;
    return count;
}

console.log(lessCounter(2)) // 2 X - 2 O
console.log(lessCounter(5)) // 7 X - 5 O

// stateful

const fulCounter = {
    count: 0,
    sum(add) {
        this.count = this.count + add;
    },
    print() {
        console.log(this.count)
    }
}

fulCounter.sum(2) // 2
fulCounter.sum(5) // 7

fulCounter.print() // 2 > 7

// lexical enviroment: The enviroment inside an function, object or an array which is also called as local enviroment.