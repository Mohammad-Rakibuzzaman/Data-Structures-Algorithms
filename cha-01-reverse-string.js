function revString(a) {


    const convertToArray = a.split("");
    let myReverseArray = [];
    console.log(convertToArray.length);
    for(let i = convertToArray.length - 1; i >= 0 ; i--) {
        myReverseArray.push(convertToArray[i]);
    } 
    // console.log(myReverseArray.join(""));
    // const finalotpt = myReverseArray.toString();

    let removeSpace = myReverseArray.join("");
    console.log(typeof(removeSpace))

    return removeSpace;

}

console.log(revString("Ratuls"));


console.log("---------------------------------")
console.log("Other Answer")
console.log("---------------------------------")

// ------------------Solution--------------------

// 1. convert string to array (split method)
// 2. Reverse the array (reverse method)
// 3. convert array back to string (join method)

const reverseString = (str) => str.split("").reverse().join("");


console.log(reverseString("Ratul"));













