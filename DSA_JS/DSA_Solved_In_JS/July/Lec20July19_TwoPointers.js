// function twoArray(arr1, arr2, n, m) {
//     let arr = new Array(n + m); // Create an array with the required size
//     let i = 0;
    
//     for (i = 0; i < n; i++) {
//         arr[i] = arr1[i]
//     }
//     for (let j = 0; j < m; j++, i++) {
//         arr[i] = arr2[j]
//     }
//     console.log("arr", arr)
//     arr.sort((a, b)=> a-b);//Time complexity of sort is O(nlogn)
//     return arr;
// }
// //

// const arr1 = [2, 4, 10, 20, 30];
// const arr2 = [1, 2, 15, 27, 60, 100, 200];
// let n = arr1.length;
// let m = arr2.length;
// console.log(twoArray(arr1, arr2, n, m));

// Time Complexity of above code is O(n+m) for merging and O((n+m)log(n+m)) for sorting.
// // So overall time complexity is O((n+m)log(n+m))
// //TimeComplexity of above code is O((n+m)log(n+m))

//
//<============= Now We are using Two Pointer method ===============>
// function twoPointer(arr1, arr2, n, m) {
//     let arr = [];
//     let i = 0, j = 0, k = 0 //k is used to track the position in the merged array

//     while (i < n && j < m) {
//         if (arr1[i] < arr2[j]) {
//             arr[k] = arr1[i]
//             // arr.push(arr1[i]);
//             i++;
//             // k++;
//         } else if (arr1[i] > arr2[j]) {
//             arr[k] = arr2[j];
//             j++;
//             // k++;
//         } else {
//             // Both are equal, so add both
//             arr[k] = arr1[i];
//             i++;
//             // k++;
//             arr[k] = arr2[j];
//             j++;
//             // k++;
//         }
//         k++;
//     }

//     // Copy remaining elements of arr1
//     while (i < n) {
//         arr[k] = arr1[i];
//         i++;
//         k++
//     }
//     // Copy remaining elements of arr2
//     while (j < n) {
//         arr[k] = arr2[j];
//         j++;
//         k++
//     }
//     return arr;
// }

// const arr1 = [1, 2, 2, 6, 6, 10];// i
// const arr2 = [2, 4, 10, 15, 20, 30];//j
// //Step1: I will compare arr1, arr2 index which value is smaller I will put it in new arr 
// // arr = [1]
// // and I will increase index which arr1 or arr2 value is smaller, Now in the above i at arr[1] = 2 and j at arr[0] = 2 
// //Now in this case I will move both index, 
// //arr = [1, 2, 2, 2]
// // now i of arr1 is at arr[3] = 6 and j of arr2 is at arr2[1] = 4, Now arr2 is smaller so I put arr2 vale and move j index
// //arr[1, 2, 2, 2, 4] and it will continue
// // arr[1, 2, 2, 2, 4, 6, 6, 10, 10, 15, 20, 30]
// //Its time complexity is O(n+m)

// let n = arr1.length;
// let m = arr2.length;
// console.log(twoPointer(arr1, arr2, n, m)); 


////////////
// function twoPointer(arr1, arr2, n, m) {
//     let arr = []; // Start with an empty array
//     let i = 0, j = 0;

//     // Merge two sorted arrays using two pointers
//     while (i < n && j < m) {
//         if (arr1[i] < arr2[j]) {
//             arr.push(arr1[i]);
//             i++;
//         } else if (arr1[i] > arr2[j]) {
//             arr.push(arr2[j]);
//             j++;
//         } else { 
//             // Both are equal, so add both
//             arr.push(arr1[i]);
//             arr.push(arr2[j]);
//             i++;
//             j++;
//         }
//     }

//     // Copy remaining elements of arr1
//     while (i < n) {
//         arr.push(arr1[i]);
//         i++;
//     }

//     // Copy remaining elements of arr2
//     while (j < m) {
//         arr.push(arr2[j]);
//         j++;
//     }

//     return arr; // Return the merged sorted array
// }

// // Test case
// const arr1 = [1, 2, 2, 6, 6, 10];
// const arr2 = [2, 4, 10, 15, 20, 30];

// let n = arr1.length;
// let m = arr2.length;

// console.log(twoPointer(arr1, arr2, n, m)); 


//<===================Shortest Mininum Difference ========>
// function minimumDifference(arr1, arr2, n, m) {
//     let i = 0, j = 0;
//     let min = Math.abs(arr1[0] - arr2[0]);
//     console.log("min", min)
//     while (i < n && j < m) {
//         let diff = Math.abs(arr1[i] - arr2[j]);// Calculate the absolute difference
//         console.log("Diff", diff)
//         min = Math.min(min, diff)// Update the minimum difference
//         if (min === 0)
//             break;
//         if (arr1[i] <= arr2[j]) {
//             i++;
//         } else {
//             j++;
//         }
//     }
//     return min
// }
// const arr1 = [12, 15, 16, 19, 21, 29];
// const arr2 = [1, 2, 3, 58, 61, 65];
// let n = arr1.length;
// let m = arr2.length;

// console.log(minimumDifference(arr1, arr2, n, m));
