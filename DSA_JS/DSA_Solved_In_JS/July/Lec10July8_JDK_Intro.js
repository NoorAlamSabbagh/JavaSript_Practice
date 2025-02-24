// const factor = () => {
//     let n = 12;
//     for (let i = 1; i <= n; i++) { // Start from 1 to avoid division by zero
//         if (n % i === 0) {
//             console.log("Factor:", i);
//         }
//     }
// };

// factor();


//
//Highest common multiple
// const factor = () => {
//     let n = 12, m = 8;
//     let ans = 0;
//     for (let i = 1; i <= n && i <= m; i++) { // Loop until the smaller of n and m
//         if (n % i === 0 && m % i === 0) {   // Check if i is a factor of both n and m
//             ans = i;                        // Update ans with the current HCF
//         }
//     }
//     return ans; // Return the HCF after the loop completes
// };

// const hcf = factor(); // Call the function and store the result
// console.log("HCF of " + 12 + " & " + 8 + " is " + hcf); // Output the result


//
//Lowest common multiple
// const LCM = (n, m) => {
//     let greater = Math.max(m, n)
//     console.log("greater", greater)
//     let lcm = greater;
//     while (true) {
//         if (lcm % n === 0 && lcm % m === 0) {
//             // console.log("lcm", lcm)
//             return lcm; // Return the LCM when found
//         }
//      lcm += greater;
//     }
// }
// let n = 6, m = 9;
// const lcm = LCM(n, m);
// console.log(`LCM of + ${m} & ${n} is ${lcm}`);

//
// function primeNumber(n){
//     let count = 0
//     for(let i = 1; i<=n; i++){
//         if(n%i == 0)
//             count++;
//     }
// if(count === 2){
//     console.log("Prime!");
// }else{
//     console.log("Not Prime!")
// }
// }
// let n = 23;
// primeNumber(n);