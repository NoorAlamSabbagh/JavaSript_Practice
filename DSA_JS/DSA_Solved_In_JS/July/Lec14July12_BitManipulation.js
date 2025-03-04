//Swapping Method
// let a = 10;
// let b = 5;

// a = a+b; //15
// b = a-b; //10
// a = a-b; //5
// console.log('a', a)

//
// const swapValue = (a, b) => {
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("After swap a", a)
//     console.log("After swap b", b)
// }
// let a = 10;
// let b = 20;
// swapValue(a, b); 


//
//Swapping Using XOR operator
// const swapValue = (a, b) => {
//     a = a^b;
//     b = a^b;
//     a = a^b;
//     console.log("After swap a", a)
//     console.log("After swap b", b)
// }
// let a = 10;
// let b = 20;
// swapValue(a, b); 


//
//GrayCode problem
//Using function Decleration
// function grayCode(a){
//     return (a^(a>>1));

// }
// let a = 10;
// const gradCodeValue = grayCode(a)
// console.log('gradCodeValue', gradCodeValue);

//
// minimum XOR value
// function minimumXor(arr) {
//     // Sort the array in ascending order
//     arr.sort((a, b) => a - b);
//     let minXor = Infinity;
//     // Compare adjacent elements to find the minimum XOR
//     for (let i = 0; i < arr.length - 1; i++) {
//         minXor = Math.min(minXor, arr[i] ^ arr[i + 1]);
//     }
//     console.log("Minimum XOR value:", minXor);
//     return minXor;
// }

// // Test cases
// const arr1 = [0, 2, 5, 7];
// const arr2 = [0, 4, 7, 9];

// minimumXor(arr1);
// minimumXor(arr2);

//
function minimumXor(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
     let min = arr[1] ^ arr[0]; // Initialize with first XOR pair
     // console.log('min', min);

    for (let i = 1; i < arr.length - 1; i++) { // Iterate until second last element
        let xorValue = arr[i] ^ arr[i + 1];
        if (xorValue < min) {
            min = xorValue;
        }
    }

    console.log("Minimum XOR value:", min);
    return min;
}

// Test cases
const arr1 = [0, 2, 5, 7];
const arr2 = [0, 4, 7, 9];

minimumXor(arr1);
minimumXor(arr2);