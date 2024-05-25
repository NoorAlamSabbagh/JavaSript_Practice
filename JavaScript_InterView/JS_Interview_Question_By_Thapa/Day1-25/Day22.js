//Day(22) Median of Array;
const findMedian = (arr) => {
    //step(1): Sort the array
    console.log(arr.sort((a, b) => a - b));

    //step(2): check if the given length is odd or even
    let length = arr.length;
    let mid = Math.floor(length / 2);
    // console.log("mid", mid)
    if (length % 2 === 0) {
        //step(3): for even length array
        return (arr[mid] + arr[mid - 1]) / 2;
    } else {
        //step(4): for odd length array
        return arr[mid];
    }

}
console.log(findMedian([5, 3, 9, 1, 7]));//Output: 5
console.log(findMedian([2, 4, 6, 1, 8]));//Output: 5
console.log(findMedian([1, 3, 5, 7, 9, 11]));//Output: 6