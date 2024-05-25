//(9)calculate the average
const calculateAverage = (arr) => {
    let total = arr.reduce((accum, currElem) => accum+ currElem, 0);
    console.log(total);
    return total/arr.length;
}

console.log(calculateAverage([5, 10, 2, 8]));//O/p: 2
// console.log(calculateAverage([5, 10, 2, 8]));//O/p: 120
// console.log(calculateAverage([5, 10, 2, 8]));//O/p: 120