// A 2D array, or two-dimensional array, is a data structure that represents a collection of elements organized in rows and columns, 
// forming a grid or matrix. 
// It is essentially an array of arrays, where each element is accessed using two indices: one for the row and one for the column

//
// 1D Arrays in JavaScript
// A 1D array is a linear collection of elements, where each element is accessed using a single index.
// Key Features:
// (1) Declaration:
// let arr = [1, 2, 3, 4, 5]; // Direct initialization
// let arr2 = new Array(5);    // Array of size 5 (empty)
//(2)Accessing Elements:
// console.log(arr[0]); // Output: 1 (first element)
// console.log(arr[2]); // Output: 3 (third element)
// Common Operations:
// Traversal: Loop through the array.
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


//
// function maxElement(arr2){
//     let max = arr2[0];
//     for(let i=1; i<arr2.length; i++){
//         if(arr2[i]>max){
//             max = arr2[i];
//         }
//     }       
//     return max;
// }
// const arr2 = [1, 2, 3, 4, 5];
// console.log(maxElement(arr2));

//
// 2D Arrays in JavaScript
// A 2D array is an array of arrays, where each element is accessed using two indices (row and column).

// Key Features:
// (1) Declaration:
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[0][1]); // Output: 2 (first row, second column)
// console.log(matrix[2][2]); // Output: 9 (third row, third column)

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

//
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     let row = "";
//     for (let j = 0; j < matrix[i].length; j++) {
//         row += matrix[i][j] + " "; // Add each element to the row string
//     }
//     console.log(row); // Print the row
// }

// function searchInMatrix(matrix, target) {
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// Example Problem: Transpose of a 2D Matrix
// 
// function transpose(matrix2) {
//     let rows = matrix2.length;
//     let cols = matrix2[0].length;
//     let result = new Array(cols).fill(0).map(() => new Array(rows));

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             result[j][i] = matrix2[i][j];
//         }
//     }
//     return result;
// }

// let matrix2 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(transpose(matrix));
// // Output:
// // [
// //   [1, 4, 7],
// //   [2, 5, 8],
// //   [3, 6, 9]
// // ]


//
// Example Problems to Practice
//(1) 1D Array Problems:
//(2) Find the sum of all elements in an array.
//(3)Reverse an array.
//(4) Find the second largest element in an array.
//(5)Move all zeros to the end of the array.

//
//2D Array Problems:
//(1)Print a 2D array in spiral order.
//(2)Rotate a 2D matrix by 90 degrees.
//(3)Find the sum of diagonal elements in a 2D matrix.
//(4) Search for a target value in a sorted 2D matrix.

//
// function pattern(a, b){
//     for(let i=1; i<=a; i++){
//         for(let j=1; j<=b; j++){
//             console.log("*");
//         }
//     }
// }
// let a = 5;
// let b = 5;
// console.log(pattern(a, b));

//
// function pattern(a, b) {
//     for (let i = 1; i <= a; i++) {
//         let row = "";
//         for (let j = 1; j <= b; j++) {
//             row += "* ";
//         }
//         console.log(row); // Print the row
//         // console.log(row.trim()); // Print the row
//     }
// }

// let a = 5;
// let b = 5;
// pattern(a, b);

//
// function numberPattern(n) {
//         for (let i = 0, p = 0; i < n; i++, p += 6) {
//             let row = "";
//             for (let j = 0, q = p; j < n; j++, q += 4) {
//                 row += q + " ";
//             }
//             console.log(row); // Print the row
//         }
//     }
//     numberPattern(5);
// Output:
// 0 4 8 12 16
// 6 10 14 18 22
// 12 16 20 24 28
// 18 22 26 30 34
// 24 28 32 36 40



//
// function missingNumber(arr){
//     let i, j;
//     //Method 1
//     // for( i=1; i<=n; i++){
//     //     for(j=0; j<n-1; j++)
//     //         if (arr[j] == i) {
//     //             break;
//     //         }
//     //         if (j == n - 1) {
//     //             console.log(i);
//     //             break;
//     //         }
//     //     }

//     //
//     //Method 2
//     const sum = (n*(n+1))/2;
//     console.log('sum', sum);

//     let arrSum = 0;
//     for(let i =0; i<n-1; i++){
//          arrSum += arr[i]
//     }
//     const missingNumber = sum - arrSum;
//     console.log('missingNumber', missingNumber);
// }
// const n = 5;
// const arr = [1, 2, 3, 4];
// missingNumber(arr)

//
function numberSum(n){
    let sum = 0;
while(n>0){
    let r = n%10;
    // console.log('r', r);
    sum += r;
    n = Math.floor(n/10);
}
console.log('sum', sum);
}
numberSum(912356)


// function numberSum(n) {
//     while (n > 0) {
//         let r = n % 10; // Extract the last digit
//         console.log(r);  // Print the digit
//         n = Math.floor(n / 10); // Remove the last digit
//     }
// }

// // Call the function with a number
// numberSum(912356);
