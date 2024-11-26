//11: Write a function that takes a number as input and returns the sum of its digits

const sumOfDigits = (num) => {
     let arr1 = Array.from(num);
     console.log("kkk",arr1)//[]
     let arr2 = Array.from(String(num));//Output: arr2 [ '1', '2', '3', '4' ]
     console.log("arr2",arr2)
     let arr = Array.from(String(num), Number);
    console.log("arr",arr)//Output: arr [ 1, 2, 3, 4 ]
    return arr.reduce((accum, currElem) => accum + currElem, 0);
}
//Example Usage:
console.log(sumOfDigits(1234));//Output: 10
// console.log(sumOfDigits(4321));//Output: 10
// console.log(sumOfDigits(123456));//Output: 21