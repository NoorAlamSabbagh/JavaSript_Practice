//(10)
const arrayAreEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    return arr1.every((currVal, index) => currVal === arr2[index]);
}

console.log(arrayAreEqual([1, 2, 3], [1, 2, 3]));//O/p: true
console.log(arrayAreEqual([1, 2, 3], [1, 2, 4]));//O/p: true
console.log(arrayAreEqual([], []));//O/p: true