// const bitOperation = (a, b) => {
//     // console.log(a & b)
//     // console.log(a | b)
//     // console.log(a ^ b)
//     // console.log(!true)
//     console.log(!false)

// }
// let a = 5;
// let b = 9;
// bitOperation(a, b)


//
//<======Compliment Operator ===========>
// const complimentValue = (a, b) => {

//     //concept
//     //+ve --->(-ve) +1;
//     //-ve --->(+ve) -1;
//     console.log(~10)
//     console.log(~(-7))
// }
// let a = 5;
// let b = 9;
// complimentValue(a, b)

//
// const leftShiftValue = (a, b) => {
// console.log(a<<b);
// }
// let a = 11;
// let b = 2;
// leftShiftValue(a, b)

//
// const RightShiftValue = (a, b) => {
//     console.log(a>>b);
//     }
//     let a = 11;
//     // let b = 1;
//     let b = 2;
//     RightShiftValue(a, b)

//
//Masking in JavaScript
// const masking = (a) => {
//     if ((a & 1) === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// // let a = 5
// let a = 10
// masking(a)

//
//Way to find out bit is 1 or 0 in specific position of binary number
// const bitPositon = (x, n) => {
// if((x&(1<<(n-1)))===0){
//     console.log("Zero")
// }else{
//     console.log("One")
// }
// }
// let x = 77, n = 4;
// bitPositon(x, n)

//
//To set bit from 0 to 1 or 1 to 0
// const bitPositonSet = (x, n) => {
//     let ans = (x|(1<<(n-1)))
//         console.log("ans", ans)
//     }
//     // let x = 19, n = 2;
//     let x = 19, n = 3;
//     bitPositonSet(x, n)

//
const bitPositonUnSet = (x, n) => {
    let ans = (x & (~(1<<(n-1))));
        console.log("ans", ans)
    }
    // let x = 19, n = 2;
    let x = 45, n = 4;
    bitPositonUnSet(x, n)