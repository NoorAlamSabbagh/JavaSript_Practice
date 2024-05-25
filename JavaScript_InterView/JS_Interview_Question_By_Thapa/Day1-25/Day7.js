//(7)Write a function findMax that take an array of numbers as input and returns the maximum number in the array.


const findMax = (arr) => {
    console.log(arr);
    return Math.max(...arr);
}
// console.log(findMax());
//Example Usage
console.log(findMax([1, 5, 3, 9, 2])); //Output: 9
console.log(findMax([-10, -5, -3, -9, -2])); //OutPut: -2
console.log(findMax([5])); //Outpi\ut: 5