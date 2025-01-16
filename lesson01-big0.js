// -----------------------------------
// const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

// const searchForItem = (item) => {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log(`Found ${item}`);
//     }
//   }
// };

// searchForItem("eggs");
// -----------------------------------

const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`Found ${item}`);
    }
  }

  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item) {
      console.log(`Found ${item} 2`);
    }
  }

  // n + n = 2n -> O(2n)
  // Drop the constant so it becomes O(n)
};

searchForItem("eggs");

//O(1) -constant == const keyword and not going to be change

const numberss = [1, 2, 3, 4, 5];
const getElement = (arr, index) => arr[index];
console.log(getElement(numberss, 0));


// O(n^2)

// ------------------------------------
// function findPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(`Pair: ${arr[i]}, ${arr[j]}`);
//     }
//   }
// }

// const numbers = [1, 2, 3, 4, 5];
// findPairs(numbers);
// ------------------------------------

// ------------------------------------
// Drop Non-Dominants
function findPairs(arr) {
  // O(n^2)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[i]}, ${arr[j]}`);
    }
  }

  // O(n)
  for (let q = 0; q < 5; q++) {
    console.log("-------------", q);
  }

  // If we combine all the "O" operations it becomes O(n^2 + n)
  // O(n^2) is a Dominant term
  // "n" is a Non-Dominant term
  // So we remove the "non-dominant" term and we're only left with O(n^2)
  // This way, we simplify our bigO
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);
// ------------------------------------



//O(log(n))