//11: Write a function that takes a number as input and returns the sum of its digits

const sumOfDigits = (num) => {
     let arr = Array.from(String(num), Number);
    console.log(arr)
    return arr.reduce((accum, currElem) => accum + currElem, 0);
}
//Example Usage:
console.log(sumOfDigits(1234));//Output: 10
// console.log(sumOfDigits(4321));//Output: 10
// console.log(sumOfDigits(123456));//Output: 21