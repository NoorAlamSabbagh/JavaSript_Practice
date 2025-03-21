//* --------------------------------------------------------
//* Programming Questions: Sort an Array
//* --------------------------------------------------------

//Q1: Write a function to sort an array of numbers in ascending order.
const sortAscending = (arr) => {
    return arr.sort((a, b) => a-b);
}

//Example Usage:
console.log((sortAscending([5, 3, 1, 8]))); //Output: [1, 3, 5, 8]

// console.log((sortAscending([5, 3, 10, 8]))); //Output: [3, 5, 8, 10]
// console.log(typeof sortAscending[2]);

//* todo Requirements:
//? the function should take an array of numbers as input:
//? It should return a new array with the numbers sorted in ascendig order.
//? The original array should remain unchanged
//? You are not allowed to use the built_in sort() method;
