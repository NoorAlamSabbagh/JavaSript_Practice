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
//Binary Search using recurssion
function binarySearch(arr, n, x) {
    let l = 0;
    let r = n - 1; // Fix right boundary

    while (l <= r) { // Fix condition
        let m = Math.floor((l + r) / 2); // Ensure integer index

        if (arr[m] === x) {
            return m; // Return index if found
        } else if (arr[m] < x) {
            l = m + 1; // Search right half
        } else {
            r = m - 1; // Search left half
        }
    }
    return -1; // Element not found
}

let arr = [10, 25, 30, 42, 100];
let n = arr.length;
let x = 42;

console.log(binarySearch(arr, n, x)); // Output: 3