//(12)Remove Duplicate elements

const removeDuplicates = (arr) =>{
    console.log("arr1", arr) //arr1 [ 1, 2, 3, 2, 1, 4 ]
    console.log("arr2", ...arr)// arr 2 1 2 3 2 1 4
    // return [...arr];
    let newArr1 = [new Set(arr)];
    console.log("newArr1", newArr1)//Output: newArr1 [ Set(4) { 1, 2, 3, 4 } ]
    let newArr = [...new Set(arr)];
    console.log(newArr)//Output: [ 1, 2, 3, 4 ]
    return newArr;
}

console.log(removeDuplicates([1,2,3,2,1,4])); //Output: [1,2,3,4]
// console.log(removeDuplicates([5,6,7,7,8,8,9])); //Output: [5,6,7,8,9]
// console.log(removeDuplicates([1,2,3,2,1,4])); //Output: [1,2,3,4]