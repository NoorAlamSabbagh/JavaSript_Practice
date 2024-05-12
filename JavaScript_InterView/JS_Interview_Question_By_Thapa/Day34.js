//Day34: Remove Duplicate elements from array

// const removeDuplicates = (arr) => {
//     // return new Set(arr);
//     return [...new Set(arr)]
// }

//method 2
const removeDuplicates = (arr) => [...new Set(arr)];
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5]));//Output: [1,2,3,4,5]
console.log(removeDuplicates(["a", "b", "c", "b", "a"]));//Output: ["a", "b", "c"]