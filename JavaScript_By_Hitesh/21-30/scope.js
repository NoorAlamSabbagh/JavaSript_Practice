// let a = 10;
// let b = 20;
// let c = 3000;

// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("INNER: ", a)
// }
// // console.log(a)
// // console.log(b)
// console.log(c)


//Closure:A closure is a feature of JavaScript that allows inner functions
//  to access the outer scope of a function
// function one(){
//     const username = "Noor Alam";
//  function two(){
//     const website = "Newton school"
//     console.log(username)
//  }
// //  console.log(website)
//  two()
// }
// one()


//
//Hoisting
// console.log(addOne(4))
// function addOne(num){
//     return num + 1;
// }
// // console.log(addOne(4))


//
// console.log(addTwo(5))
// const addTwo = function(num){//function expressions
//     return num + 2
// }
// console.log(addTwo(5))