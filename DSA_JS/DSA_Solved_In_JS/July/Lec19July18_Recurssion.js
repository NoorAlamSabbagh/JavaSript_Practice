//<================Recursion==================>
// Calling of a method inside its own definition
//It should have a breaking condition else it will run into infinite loop.
//Any task that can be done by iteration(looped) can be done using recursion and vice versa

// function fun() {
//     for (let i = 1; i < 10; i++) {
//         console.log(`Function printed: Function${i}`);
//     }
// }
// fun()


//
// function fun(i) {
//     if (i === 10) return;

//     console.log(i + " FUN!");
//     fun(i + 1);
// }

// fun(0);

//
// function fun(k) {
//     if(k === 3)
//         return;
//     for (let i = 1; i < 10; i++) {
//         console.log(`Function printed: Function${i} -- ${k}`);
//     }
//     fun(k+1)
// }
// fun(1);

//
// function fun(k) {
//     if (k === 3)
//         return;
//     for (let i = 1; i < 10; i++) {
//         fun(k + 1)
//         console.log(`Function printed: Function${i} -- ${k}`);
//     }
// }
// fun(1);

//
//Any task that can be done by iteration(looped) can be done using recursion and vice versa
//
// function printDigits(n) {
//     while (n > 0) {
//         let r = n % 10;
//         console.log("r", r);
//         n = Math.floor(n / 10);
//         console.log("n", n)
//     }
// }

// // Example usage
// let n = 1024;
// printDigits(n);

//
//Same above tsks using recurssion
// function printDigitsWithRecursion(n) {
//     if (n === 0) return;

//     let r = n % 10;
//     printDigitsWithRecursion(Math.floor(n / 10));
//     process.stdout.write(r.toString()); // Print without newline
// }

// function printDigits(n) {
//     while (n > 0) {
//         let r = n % 10;
//         console.log(r);
//         n = Math.floor(n / 10);
//     }
// }

// // Example usage
// let n = 1024;
// printDigitsWithRecursion(n);

//
// function binarySearch(arr, n, x) {
//     let l = 0;
//     let r = n - 1; // Fix right boundary

//     while (l <= r) { // Fix condition
//         let m = Math.floor((l + r) / 2); // Ensure integer index

//         if (arr[m] === x) {
//             return m; // Return index if found
//         } else if (arr[m] < x) {
//             l = m + 1; // Search right half
//         } else {
//             r = m - 1; // Search left half
//         }
//     }
//     return -1; // Element not found
// }

// let arr = [10, 25, 30, 42, 100];
// let n = arr.length;
// let x = 42;

// console.log(binarySearch(arr, n, x)); // Output: 3

//
//Binary Search using recurssion
// function binarySearchWithRecursion(arr, x, l, r) {
//     if (l > r) {
//         return -1;
//     }

//     let m = Math.floor(l + (r - l) / 2);

//     if (arr[m] === x) {
//         return m;
//     } 
//     if (arr[m] < x) {
//         return binarySearchWithRecursion(arr, x, m + 1, r);
//     } 
//     return binarySearchWithRecursion(arr, x, l, m - 1);
// }

// let arr = [10, 25, 30, 42, 100];
// let x = 42;
// console.log(binarySearchWithRecursion(arr, x, 0, arr.length - 1)); // Output: 3


//
//Multiply by recursion
// function multiply_by_recursion(m, n) {
//     // Base case: If either number is 0, the product is 0
//     if (n === 0) {
//         return 0;
//     }

//     // Recursive case: Add m to the result of multiplying m with (n-1)
//     return m + multiply_by_recursion(m, n - 1);
// }

// // Test cases
// console.log(multiply_by_recursion(2, 3)); // Output: 6
// console.log(multiply_by_recursion(3, 4)); // Output: 12

//
// print pattern
function printPattern(N, curr=N, flag = true){
    process.stdout.write(curr + " ");
if(N ===curr && flag== false)
    return;
    // console.log("curr", curr + " ");

    if(flag == true)
        curr -= 5;
    else
    curr += 5;

    if(curr <= 0)
        flag = false;
    printPattern(N, curr, flag)
}


printPattern(16);
console.log();
printPattern(10);



//
// function PrintPattern(N, curr = N, flag = true) {
//     // Print the current value
//     process.stdout.write(curr + " ");

//     // Base case: If we reached back to N after decreasing and increasing
//     if (curr === N && !flag) {
//         return;
//     }

//     // If we are still decreasing and curr > 0, continue decreasing
//     if (flag && curr - 5 > 0) {
//         PrintPattern(N, curr - 5, true);
//     } else {
//         // Start increasing when curr <= 0 or we have already decreased to the lowest point
//         PrintPattern(N, curr + 5, false);
//     }
// }

// // Test cases
// PrintPattern(16); // Output: 16 11 6 1 -4 1 6 11 16
// console.log();
// PrintPattern(10); // Output: 10 5 0 5 10
