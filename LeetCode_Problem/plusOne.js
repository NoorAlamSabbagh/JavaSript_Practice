var plusOne = function(digits) {
    let n = digits.length;

    // Traverse the digits array from right to left
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1; // Increment the current digit
            const alam3 =  digits;  // Return the updated array
            // console.log("alam3", alam3)
            return digits;  // Return the updated array
        }
       const alam = digits[i] = 0; // Set the current digit to 0 if it's 9
    //    console.log("alam", alam)
    }

    // If all digits are 9, we need to add a new leading 1
    const alam2 = digits.unshift(1);
    // const alam2 = digits.shift(1);
    // console.log("alam2", alam2)
    return digits;
};

console.log(plusOne([1, 2, 3])); // Output [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output [4, 3, 2, 2]
console.log(plusOne([9])); // Output [1, 0]


/////////////
// var plusOne = function(digits) {
//     let n = digits.length;

//     // Traverse the digits array from right to left
//     for (let i = n - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i] += 1; // Increment the current digit
//             return digits;  // Return the updated array
//         }
//         digits[i] = 0; // Set the current digit to 0 if it's 9
//     }

//     // If all digits are 9, we need to add a new leading 1
//     digits.unshift(1);
//     return digits;
// };

// console.log(plusOne([1, 2, 3])); // Output [1, 2, 4]
// console.log(plusOne([4, 3, 2, 1])); // Output [4, 3, 2, 2]
// console.log(plusOne([9])); // Output [1, 0]
