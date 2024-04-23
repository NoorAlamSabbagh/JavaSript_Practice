//(15)
const sumOfSquares = (arr) => {
    console.log(arr)
return arr.reduce((accum, currelem) => (accum = accum + currelem*currelem))
}

console.log(sumOfSquares([1, 2, 3]))//Output = 14