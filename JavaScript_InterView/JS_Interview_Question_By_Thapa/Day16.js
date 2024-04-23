//(16) Find the minimum value in an array
const findMin = (arr) => {
    //Method (1)
// arr =  arr.sort((a, b) =>{
//     if(b>a) return -1;
// })
// return arr[0];

// (2)Method;
if(arr.length ===0) return "Array is empty"
return Math.min(...arr);
}
console.log(findMin([5, 10, 2, 8]));//Output: 2
console.log(findMin([5, -3, 0, 12, -1]));//Output: -7
console.log(findMin([]));//Output: undefined