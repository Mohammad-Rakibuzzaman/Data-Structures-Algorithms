// const stringArr = ['a', 'b', 'c', 'd', 'e']

// const numArr = [1, 2, 3, 4, 5]

// const boolArr = [true, false]

// const mixed =  ['a', 2, true, undefined, {a: 'apple'}, ['b']]


// console.log(mixed)


//now lets creating our own array

class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(a) {

        this.data[this.length] = a;
        // console.log('-----', this.data[this.length]);

        this.length++;

        return this.length;
    }

    get(b) {
        return this.data[b];
    }

    pop() {
        

    }


    

}

const myNewArray = new MyArray();
myNewArray.push("Ratul");
myNewArray.push(4);
myNewArray.push("Rahul");

console.log(myNewArray)
// console.log(myNewArray.data)
console.log(myNewArray.get(1));