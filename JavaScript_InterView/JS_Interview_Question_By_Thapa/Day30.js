//Day(30) Using Recursion


const numberRangeRecursive = (a, b, arr = []) => {
    if(a<=b){
        arr.push(a);
        return numberRangeRecursive(a+1, b, arr);
    }
    return arr;
}

console.log("Day30", numberRangeRecursive(0, 5)); //Output: [0, 1, 2, 3, 4, 5]
console.log("Day30", numberRangeRecursive(3, 7)); //Output: [3, 4, 5, 6, 7]
console.log("Day30", numberRangeRecursive(-2, 2)); //Output: [-2, -1, 0, 1, 2]