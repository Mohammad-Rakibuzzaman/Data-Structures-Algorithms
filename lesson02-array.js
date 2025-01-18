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

        const lastItem = this.data[this.length - 1];
        // return this.data[this.length-1];
        // console.log(lastItem);

        delete this.data[this.length - 1];
        this.length--;

        return lastItem;

    }


    shift() {
     
        // console.log(firstItem);
        

        // firstItem = firstItem + 1;
        // let secondItem = this.data[1];
        // secondItem += 1;
       

        // delete this.data[0];
        
        const firstItem = this.data[0];
        
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i+1];
            // console.log(this.data[i]); 

        }
        this.pop();

        // delete this.data[this.length - 1];
        // this.length--;



        // console.log(this.data[1])
        return firstItem;

        // 0     1   2     
        // ratul 4   rahul
        
    }


    deleteByIndex(index){

        let deleteData = this.data[index];

        // for(let i = 0; i < this.length; i++){
        //     if(i >= index){
        //         delete this.data[i];
        //         this.data[i] = this.data[i+1];
                
        //     }  
        // }

        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.pop();
        // delete this.data[this.length - 1];
        // this.length--;

        // return this.data[index];
        return deleteData;

    }




}

const myNewArray = new MyArray();
myNewArray.push("Ratul");
myNewArray.push(4);
myNewArray.push("Rahul");
myNewArray.push("Labiba rahman");
myNewArray.push("7");

// console.log(myNewArray)
// myNewArray.pop();
// console.log(myNewArray);
// console.log(myNewArray.pop());
// console.log(myNewArray);

// console.log(myNewArray.data)
// console.log(myNewArray.get(1));
// myNewArray.shift();
// console.log(myNewArray);
// console.log(myNewArray.shift());
// myNewArray.shift();
// console.log(myNewArray);

// console.log(myNewArray);
// console.log(myNewArray.shift());
// console.log(myNewArray);
// console.log(myNewArray.shift());
// console.log(myNewArray);


console.log(myNewArray);
// myNewArray.deleteByIndex();
console.log(myNewArray.deleteByIndex(2));
console.log(myNewArray);
