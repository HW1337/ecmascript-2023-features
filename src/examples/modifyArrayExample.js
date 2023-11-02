const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// toReversed

const reversed = numbers.toReversed();
console.log("reversed", reversed); // "reversed", [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log("original", numbers); // "original", [1, 2, 3, 4, 5, 6, 7, 8, 9]

// toSorted
const sortedArr = numbers.toSorted();
console.log("sorted", sortedArr); // "sorted", [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("original", numbers); // "original", [1, 2, 3, 4, 5, 6, 7, 8, 9]

// with 
const replaceWith = numbers.with(1, 100);
console.log("with", replaceWith); // "with", [1, 100, 3, 4, 5, 6, 7, 8, 9]
console.log("original", numbers); // "original", [1, 2, 3, 4, 5, 6, 7, 8, 9]

// toSpliced
const splicedArr = numbers.toSpliced(0, 4);
console.log("toSpliced", splicedArr); // "toSpliced", [5, 6, 7, 8, 9]
console.log("original", numbers); // "original", [1, 2, 3, 4, 5, 6, 7, 8, 9]