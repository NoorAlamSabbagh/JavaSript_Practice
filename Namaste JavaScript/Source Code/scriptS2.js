//Lecture 2: CallBack Hell
// Callback hell, also known as the "pyramid of doom", is a phenomenon that occurs in asynchronous programming,
// particularly in JavaScript, when multiple nested callbacks are used to handle asynchronous operations.

// What causes callback hell?
// Asynchronous operations in JavaScript are often handled using callbacks, 
// which are functions that are passed as arguments to other functions and executed when the asynchronous operation completes.
// When you have multiple asynchronous operations that depend on each other,
//  you end up nesting callbacks within callbacks, creating a deeply nested structure that is difficult to read, understand, and maintain.

//https://www.geeksforgeeks.org/what-to-understand-callback-and-callback-hell-in-javascript/
// const cart = ["shoes", "pants", "Kurta"];

// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(
//             function(){
//                 api.updateWallet()
//             }
//         )
//     })
// })

//Above code create problem called inversion of control
//Inversion of control is a design principle in which the control of object creation and program flow is inverted,
// meaning that the framework or runtime controls the flow of the program, rather than the developer.

//<=============================Lecture 2: Promises ===============================>
// (1) Promises are a way to handle asynchronous operations in JavaScript. Promise object as a placeholer for the certain 
// period of time, untill we recieve a value from a asynchronous operation, a container for the future value.
// (2) A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//
// const cart = ["shoes", "pants", "Kurta"];
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId)
// })
// //above code inwhich we are using callback function, which is not good practice
// const promise = createOrder(cart);

// // at starting it will give undefined data
// // {data: undefined}
// // after some second it will give some data
// // {data: orderDetais}

// //Now we handle it under then(promise) method
// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })
// //Now we can use chaining of promises(we have control of function) that as  line no 34 code give us some data after some time
// //  then it will run prmise.then() method and give us data


//
// // const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const GITHUB_API = "https://dummyjson.com/users";
// const user = fetch(GITHUB_API)
// console.log(user)

//
// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// // const GITHUB_API = "https://dummyjson.com/users";
// const user = fetch(GITHUB_API)
// // console.log(user)
// user.then(function(response){
//     console.log(response)
// })

//Promise is like a container for the future value
//Promise has also a problem, that is we can't handle multiple promises at a time, so we use async and await 
//to handle multiple promises at a time

//
// //Promising chaining its hard to read and understand
// const cart = ["shoes", "pants", "Kurta"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId, function (paymentInfp) {
//         showOrderSummary(paymentInfp, function () {
//             updateWalletDataBalance()
//         })
//     })
// })
// const promise = createOrder(cart);
// promise.then(function(orderId){
//         proceedToPayment(orderId)
//     })


// // above code we can write as below
// createOrder(cart)
// .then(function (orderId) {
//     proceedToPayment(orderId)
// })
// .then(function (paymentInfp) {
//     showOrderSummary(paymentInfp)
// })
// .then(function (paymentInfp) {
//     updateWalletDataBalance(paymentInfp)
// })

// createOrder(cart)
// .then(orderId => proceedToPayment(orderId))
// .then(paymentInfp => showOrderSummary(paymentInfp))
// .then((paymentInfp) => updateWalletDataBalance(paymentInfp))


//<=============================Lecture 3: Promise Chain ===============================>
//Topics are
// (1) Creating a Promise
// (2) Error Handling in Promises
// (3) Promise Chaining

//
// const cart = ["shoes", "pants", "Kurta"];

// const promise = createOrder(cart)
// promise.then(function (orderID) {
//     console.log('orderId', orderID)
// })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create Order
//         //validateCart
//         //orderID is required
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             resolve(orderId)
//         }
//     });
//     return pr;
// }

// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


//
// const cart = ["shoes", "pants", "Kurta"];

// const promise = createOrder(cart)
// promise.then(function (orderID) {
//     console.log('orderId', orderID)
// })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create Order
//         //validateCart
//         //orderID is required
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(function(){
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


//
// //If Promise is rejected
// const cart = [];
// const promise = createOrder(cart)
// promise.then(function (orderID) {
//     console.log('orderId', orderID)
// })
// .catch(function(err){
//     console.log("Error: ", err.message)
// })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create Order
//         //validateCart
//         //orderID is required
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(function(){
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//
//I will check for Promise Chaining
// const cart = ["shoes", "pants", "Kurta"];
// const promise = createOrder(cart)
// promise
//     .then(function (orderID) {
//         console.log('orderId', orderID);
//         return orderID;
//     })
//     // .then(function (orderID) {
//     //      return proceedToPayment('orderId', orderID)//Proceed to payment again will return promise
//     // })
//     // .then(function (paymentInfo) {
//     //     console.log('Payment Info', paymentInfo)
//     // })

//     .then(function (orderID) {
//         return proceedToPayment('orderId', orderID).then(function (paymentInfo) {
//             console.log('Payment Info', paymentInfo)
//         });
//     })
//     .catch(function (err) {
//         console.log("Error: ", err.message)
//     })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create Order
//         //validateCart
//         //orderID is required
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve("Payment Successfull")
//     })
// }

// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//
//Payment is Successfull
// const cart = ["shoes", "pants", "Kurta"];
// const promise = createOrder(cart)
// promise
//     .then(function (orderID) {
//         console.log('orderId', orderID);
//         return orderID;
//     })
//     .catch(function (err) {
//         console.log("Error: ", err.message)
//     })
//     .then(function (orderID) {
//         return proceedToPayment('orderId', orderID)
//     })
//     .then(function (paymentInfo) {
//         console.log('Payment Info', paymentInfo)
//     })
//     .catch(function (err) {
//         console.log("Error: ", err.message)
//     })
//     .then(function (orderID) {
//         console.log('No matter what happen, I will definitely be called')
//     })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create Order
//         //validateCart
//         //orderID is required
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function (resolve, reject) {
//         resolve("Payment Successfull")
//     })
// }

// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }


//
// const cart = ["shoes", "pants", "Kurta"];
// // const cart = [];

// const promise = createOrder(cart)//orderId
// console.log("promise0", promise)
// promise.then(function (orderID) {
//     console.log("Order Created: ", orderID)
//     // proceedToPayment(orderId)
// })

// ///
// function createOrder(cart) {
//     // console.log("Creating Order", cart)
//     const pr = new Promise(function (resolve, reject) {
//         //create order
//         //validateCart
//         //orderID
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject("err", err)
//             // console.log("err", err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function validateCart(cart) {
//     if (cart.length > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }



///
// //Now reject the promise
// const cart = ["shoes", "pants", "Kurta"];

// const promise = createOrder(cart)//orderId
// console.log(promise)
// promise.then(function (orderID) {
//     console.log("Order Created: ", orderID)
//     // proceedToPayment(orderId)
// })
// .catch(function(err){
//     console.log("Error: ", err.message)
// })

// ///
// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create order
//         //validateCart
//         //orderID
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function validateCart(cart) {
//     return false;
// }

//
//Now take proceedToPayment in the promise
// const cart = ["shoes", "pants", "Kurta"];

// createOrder(cart)
//  .then(function (orderID) {
//     console.log( orderID);
//     return orderID;
// })
//  .then(function (orderID) {
//     return proceedToPayment( orderID)
// })
//  .then(function (paymentInfo) {
//     console.log( paymentInfo);
// })
// .catch(function(err){
//     console.log("Error: ", err.message)
// })
// .then(function(){
//     console.log("No matter what happen, I will definitely run")
// })

// function createOrder(cart) {
//     const pr = new Promise(function (resolve, reject) {
//         //create order
//         //validateCart
//         //orderID
//         if (!validateCart(cart)) {
//             const err = new Error("Cart is not valid")
//             reject(err)
//         }
//         //logic to create order
//         const orderId = "12345";
//         if (orderId) {
//             setTimeout(() => {
//                 resolve(orderId)
//             }, 5000);
//         }
//     });
//     return pr;
// }

// function proceedToPayment(orderId) {
//     return new Promise(function(resolve, reject){
//         resolve("Payment Successfull")
//     })
// }

// function validateCart(cart) {
//     // return true;
//     return false;
// }

//
//Practice for  promise chain
// const cart = ['shoes', 'pants', 'kurta'];
// createOrder, proceedPayment, showOrderSummary, updateWallet


//
//<=============================Lecture 5: Promise APIs + Interview Questions ===============================>
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promise.all() is an array of promise
//  Promise.all([promise1, promise2, promise3])
//wait for all promises to resolve, then return an array of the resolved values

//
//If any of the promises is rejected, Promise.all() will reject with the reason of the first promise that was rejected.
//its kind of all promies or none of the promises, it will not wait for all promises to resolve, if any of the promise is rejected
// Promise.all([promise1, promise2, promise3])


//
//(2)Promise.allSettled()
// Promise.allSettled([promise1, promise2, promise3])
// wait for all promise to setteled after [value1, error2, value3]
//wait for all promises to settle (each may resolve or reject), then return an array of objects that each describes the outcome of each promise

//<=====Promis.all() vs Promise.allSettled()====>
//both are same but error handling is different
// -=Promis.all(): fail past promise if any of the promise is rejected

//
//(3)Promise.race([promise1, promise2, promise3])
// The Promise.race() static method takes an iterable of promises as input and returns a single Promise.
// This returned promise settles with the eventual state of the first promise that settles.
// promise1 is taking 5 sec and promise2 is taking 10 sec, so it will return the value of promise1 after 5 sec


//
//(4)Promise.any([promise1, promise2, promise3])
// The Promise.any() method takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills
//wait for first sucessful promise

//Difference between promise.all() vs promise.allSettled() vs promise.any() vs promise.race()
//(1)promise.all() that an promise of array of values, if all of them sucess then it will return the array of success promise
//promise.all() that an promise of array of values, if any of the promise is rejected, it will reject the whole promise.all()

//
//(2)promise.race() that an promise of array of values, if any of the promise is resolved, it will return the value of that promise
//it will return the first success promise or first rejected promise

//
//(3)promise.any() that an promise of array of values, if any of the promise is resolved, it will return the value of that promise
//it will return the first success promise, if first rejected promise then it will wait for the next promise to resolve and it will keep on waiting
//for the first success promise, seekly first success promise
//********if all of them are failed then it wil give aggregate error i.e array of all results of fail promise********


//
//Prcatices for promises with code
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     // setTimeout(() => {resolve('Promise 2 resolved')}, 1000);
//     setTimeout(() => reject('Promise 2 reject'), 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 3 resolved'), 2000);
// });

// Promise.all([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

//
//After 2 second it will fail
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
// setTimeout(() => {resolve('Promise 2 resolved')}, 1000);
// setTimeout(() => reject('Promise 2 reject'), 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Promise 3 resolved'), 2000);
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.all([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

//
//(2)Promise.allSettled()
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Promise 2 resolved')}, 1000);
// });
// const promise3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Promise 3 resolved'), 2000);
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.allSettled([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })


//
//(3)Promise.race()
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
// setTimeout(() => {resolve('Promise 2 resolved')}, 1000)
//     setTimeout(() => {resolve('Promise 2 resolved')}, 5000)
// });
// const promise3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Promise 3 resolved'), 2000);
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.race([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })


//
//(3)Promise.race()
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Promise 2 resolved')}, 5000)
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.race([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

//
//(4)Promise.any()
//wait for first success promise
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promise 1 resolved'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Promise 2 resolved')}, 5000)
// });
// const promise3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve('Promise 3 resolved'), 2000);
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.any([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 1 rejected'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve('Promise 2 resolved')}, 5000)
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.any([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err)
// })

//
//If all the promise fail then it will be aggregate error
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 1 rejected'), 3000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {reject('Promise 2 rejected')}, 5000)
// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => reject('Promise 3 rejected'), 2000);
// });

// Promise.any([promise1, promise2, promise3]).then((res) =>{
//     console.log(res)
// })
// .catch((err) => {
//     console.log(err);
//     console.log(err.errors);
// })



//<=============================Lecture 6: Async Await ===============================>
/**
 * What is async?
 * What is await?
 * How async await works behind the scenes?
 * Example of using async/await
 * Error handling in async/await
 * Interview Questions
 * Async await vs Promise.then()/.catch()
 **/

//
// function simplePromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Promise resolved successfully!");
//       }, 2000);
//     });
//   }

//   // Usage
//   simplePromise().then((message) => console.log(message)).catch((error) => console.error(error));

// (1) What is async?
//The async function alwways return a promise, if the function return a value, the promise will be resolved with the value
//
//always return a promise
// async function getData(){
//     return "Namaste";
// }

//
// async function getData(){
//     return "Namaste";
// }
// const data = getData();
// // console.log('data1', data)//Output: data1 Promise { 'Namaste' }
// data.then((res) => console.log(res));//Namaste

//
// const promise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value")
// })
// async function getData(){
//     // return "Hello World";
//     return promise;
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));


//
// const promise = new Promise((resolve, reject) => {
//     resolve('Promise Resolved Value')
// })
//  function getData(){
// promise.then((res => console.log(res)))
// }
// getData();

//
//Await is always inside your async function
//How do we handle above code using async await function
// const promise2 = new Promise((resolve, reject) => {
//     resolve('Promise Resolved Value')
// });

// async function handlePromise() {
//     const value = await promise2;
//     // return value;
//     console.log('value promise', value)
// }
// handlePromise();
//
// const promise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value")
// })
// async function getData(){
//     // return "Hello World";
//     return promise;
// }
// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then((res) => console.log(res));

//
//Async await are used to handle promises
//await can only be used inside in async function

// const promise = new Promise((resolve, reject) => {
//         resolve("Promise Resolved Value")
//     })
// async function handlePromise(){
//    const value = await promise;
//    console.log(value);
// }
// handlePromise();

//
//## Using await with async
//Async await are used to handle promises
//First I try function without asyn and await
//     const promise = new Promise((resolve, reject) => {
//          resolve("Promise Resolved Value")
//     });
//     function getData(){
//     promise.then((res) => console.log(res))
//    }
//    getData()

//
//Now I try function with asyn and await
//await can only be used inside in async function
// const promise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved Value")
// });

// async function handlePromise(){
//     const value = await promise;
//     console.log(value);
// }
// handlePromise();

//
//## Divining Deep into Async Await and see howpromises is handle with async await
// I have try function without asyn and await
// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=> {resolve('Promise Resolved Value'), 10000})
// })

// function getData(){
//     promise.then((res) => console.log(res));
//     console.log('Namaste Javascript');
// }
// getData();

//
// const promise = new Promise((resolve, reject) => {
//    setTimeout(()=> resolve('Promise Resolved Value'), 10000);
// })

// async function handlePromise(){
//     //JS Engine was waiting for Promise to resolved 
//     const value = await promise;
//     console.log('Namaste JavaScript');
//     console.log(value);
// }
// handlePromise();

//
// const promise = new Promise((resolve, reject) => {
//    setTimeout(()=> resolve('Promise Resolved Value'), 10000);
// })

// async function handlePromise(){
//     console.log('Hello World!!')
//     //JS Engine was waiting for Promise to resolved 
//     const value = await promise;
//     console.log('Namaste JavaScript');
//     console.log(value);
// }
// handlePromise();

//
//After 10 sec both value will be printed at same time
// const promise = new Promise((resolve, reject) => {
//    setTimeout(()=> resolve('Promise Resolved Value'), 10000);
// })

// async function handlePromise(){
//     console.log('Hello World!!')
//     //JS Engine was waiting for Promise to resolved 
//     const value = await promise;
//     console.log('Namaste JavaScript');
//     console.log(value);

//     const value2 = await promise;
//     console.log('Namaste JavaScript 2.0');
//     console.log('val2', value2)
// }
// handlePromise();

//
//Now I will use 2 promises
//  const promise1 = new Promise((resolve, reject) => {
//        setTimeout(()=> resolve('Promise Resolved Value1'), 10000);
//     })

//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(()=> resolve('Promise Resolved Value2'), 5000);
//      })
    
//     async function handlePromise(){
//         console.log('Hello World!!')
//         //JS Engine was waiting for Promise to resolved 
//         const value1 = await promise1;
//         console.log('Namaste JavaScript');
//         console.log('value1',value1);
    
//         const value2 = await promise2;
//         console.log('Namaste JavaScript 2.0');
//         console.log('value2', value2)
//     }
//     handlePromise();

//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> resolve('Promise Resolved Value1'), 5000);
//  })

//  const promise2 = new Promise((resolve, reject) => {
//      setTimeout(()=> resolve('Promise Resolved Value2'), 10000);
//   })
 
//  async function handlePromise(){
//      console.log('Hello World!!')
//      //JS Engine was waiting for Promise to resolved 
//      const value1 = await promise1;
//      console.log('Namaste JavaScript');
//      console.log('value1',value1);
 
//      const value2 = await promise2;
//      console.log('Namaste JavaScript 2.0');
//      console.log('value2', value2)
//  }
//  handlePromise();

//What happen behind the scenes
//initially callstack was empty as soon as we call handlePromise function, handlePromise function wil come inside callStack
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> resolve('Promise Resolved Value1'), 5000);
//  })

//  const promise2 = new Promise((resolve, reject) => {
//      setTimeout(()=> resolve('Promise Resolved Value2'), 10000);
//   })
 
//  async function handlePromise(){
//      console.log('Hello World!!')
//      //JS Engine was waiting for Promise to resolved 
//      const value1 = await promise1;
//      console.log('Namaste JavaScript');
//      console.log('value1',value1);
 
//      const value2 = await promise2;
//      console.log('Namaste JavaScript 2.0');
//      console.log('value2', value2)
//  }
//  handlePromise();

//
//Real world example of async await using fetch function
//Real world example of async/await
// const API_URL = "https://api.github.com/users/nooralamsabbagh?"
// async function handlePromise() {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json()
//     console.log('jsonValue222', jsonValue)
// }
// handlePromise();

//
// const API_URL = "https://api.github.com/users/nooralamsabbagh?"
// async function handlePromise(){
// const data = await fetch(API_URL);
// const jsonValue = await data.json()
//     console.log('jsonValue222', jsonValue)
// // fetch.then((res) => res.json()).then(res=> console.log(res))
// }
// handlePromise();

//
//Now using error handling in async await function
// const API_URL = "https://api.github.com/users/nooralamsabbagh?"
// async function handlePromise(){
//     try{
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json()
//         console.log('JsonValueeee', jsonValue)
//     }catch(err){
//         console.log("Error", err)
//     }
// }
// handlePromise();


//
// const Invalid_API_URL = "https://api.github.com/users/noamsabbagh?"
// async function handlePromise(){
//     try{
//         const data = await fetch(Invalid_API_URL);
//         const jsonValue = await data.json()
//         console.log('JsonValueeee', jsonValue)
//     }catch(err){
//         console.log("Error", err)
//     }
// }
// handlePromise();

//
//Another way to handle Error
// const Invalid_API_URL = "https://api.github.com/users/noamsabbagh?"
// async function handlePromise(){
//         const data = await fetch(Invalid_API_URL);
//         const jsonValue = await data.json()
//         console.log('JsonValueeee', jsonValue);
// }
// handlePromise().catch((err) => consolelog(err));

//
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value"), 10000)
// });

// //older way to handle promise
// function getData(){
//     //JS Engine will not wait for the promise to resolve
//     promise.then((res) => console.log(res));
//     console.log("Hello World");
// }
// getData();

//
//Now I have try function with asyn and await
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value"), 10000)
// });

// async function handlePromise(){
//  //JS Engine is waiting for the promise to resolve if I am using async and await
//     const value = await promise;
//     console.log("Namaste Javascript");
//     console.log(value);
// }
// handlePromise();

//
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value"), 10000)
// });

// async function handlePromise(){
//     console.log("Hello World");
//  //JS Engine is waiting for the promise to resolve if I am using async and await
//     const value = await promise;
//     console.log("Namaste Javascript");
//     console.log(value);
// }
// handlePromise();


//
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value"), 10000)
// });

// async function handlePromise(){
//     console.log("Hello World");
//     //After 10 seconds both the promise will resolve of value1 and value2
//     const value1 = await promise;
//     console.log("Namaste Javascript");
//     console.log(value1);
//     const value2 = await promise;
//     console.log("Namaste Javascript");
//     console.log(value2);
// }
// handlePromise();

//
//lets more little more difficult
// //It will wait for 10 sec to resolve the promise
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value1"), 10000)
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value2"), 5000)
// });

// async function handlePromise(){
//     console.log("Hello World");
//     const value1 = await promise1;
//     console.log("Namaste Javascript");
//     console.log(value1);
//     const value2 = await promise2;
//     console.log("Namaste Javascript");
//     console.log(value2);
// }
// handlePromise();
//above code will wait for 10 sec to resolve the promise1 and prmoise2

//
//## Javascript Engine does not wait for anything it is 100% true
//## Just engine just appears to be waitng over here it is not waiting
//## Jus engine is not waiting over here right JS engine is not waiting over here,
// if it has not it is not consuming memory over here it is not waiting it is not it has not
//actually occupied the call stack I would say right, this handle promise function is not in the call stack
//when it is waiting over here right otherwise if that was the case then our program or our page will freeze
//Our page has ot freeze or frozen, our page has not frozen while we are doing

//then if it is not actually waiting so this statement that JS engine was waiting is not true at all
//right it is basicaly, it looks like the JS engine is waiting but it is not true at all
//now  if the program does not wait what does it do actually how does it work behind the scenes this is what I wanted to tell you
//You wil be amazed by knowing this concept


//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value1"), 5000)
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value2"), 10000)
// });

// async function handlePromise(){
//     console.log("Hello World");
//     const value1 = await promise1;
//     console.log("Namaste Javascript");
//     console.log(value1);
//     const value2 = await promise2;
//     console.log("Namaste Javascript");
//     console.log(value2);
// }
// handlePromise();
//above code will wait for 10 sec to resolve the promise1 and prmoise2

//
//It will wait for 5 sec to resolve the promise
//  const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value1"), 5000)
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved Value2"), 10000)
// });

// async function handlePromise(){
//     console.log("Hello World");
//     const value1 = await promise1;
//     console.log("Namaste Javascript");
//     console.log(value1);
//     const value2 = await promise2;
//     console.log("Namaste Javascript");
//     console.log(value2);
// }
// handlePromise();

//
//Real world example of async/await
// const API_URL = "https://api.github.com/users/nooralamsabbagh?"
// async function handlePromise() {
//     const data = await fetch(API_URL);
//     const jsonValue = await data.json()
//     console.log(jsonValue)
//     // fetch().then(res => res.json()).then(res => console.log(res))
//     //fetch() => Response.json() => jsonValue

// }
// handlePromise();

//////////////Error Handling ////////////////////
// const API_URL = "https://api.github.com/users/nooralamsabbagh?"
// async function handlePromise() {
//     try {
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json()
//         console.log(jsonValue)
//     } catch (err) {
//         console.log(err);
//     }
//     // fetch().then(res => res.json()).then(res => console.log(res))
//     //fetch() => Response.json() => jsonValue
// }
// handlePromise();


//
//Other way to handle error
// const API_URL = "https://api.github.com/users/nooralamsabbagh?"
// async function handlePromise() {
//         const data = await fetch(API_URL);
//         const jsonValue = await data.json()
//         console.log(jsonValue)
// }
// handlePromise().catch((err) => console.log(err));

////Interview Tips///////
//What is Async and await
//Async is a keyword which is used with function and async function are different things
//Await always be used inside async function to handle promises, promises are asynchronous

///
//Async/await vs Promise.then/catch
// Both async/await and .then()/.catch() are used to handle asynchronous code in JavaScript, 
// but they have different syntax and use cases.
// 1. Using .then() / .catch() (Promise Chaining)
// fetch("https://api.github.com/users/nooralamsabbagh")
//   .then(response => response.json())
//   .then(data => console.log("User Data:", data))
//   .catch(error => console.error("Error:", error));

//Pros:
//   Works in older JavaScript versions (ES6).
// ✅ Suitable for chaining multiple promises.
// ✅ Explicit error handling using .catch().

// Cons:
// ❌ Can lead to callback hell if not structured properly.
// ❌ Less readable when dealing with multiple async operations.

//
// 2. Using async/await (Modern Approach)
// async function fetchUserData() {
//     try {
//       const response = await fetch("https://api.github.com/users/nooralamsabbagh");
//       const data = await response.json();
//       console.log("User Data:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
  
//   fetchUserData();

// Pros:
// ✅ More readable and structured like synchronous code.
// ✅ Easier to debug with try/catch.
// ✅ Great for complex async flows.

// Cons:
// ❌ Needs to be inside an async function.
// ❌ Doesn't allow parallel execution of independent promises (needs Promise.all).
  



//<=============================Lecture 7 : this keyword in Javascript ===============================>
// The this keyword refers to different objects depending on how it is used:
// (1)This in global space
//   console.log("this", this);
//   console.log(this);//global object

// (2)this inside the function
//the valiue depend on the strict/non-strict mode
//the value wil be window for non strict mode and undefined for strict mode
//the value of this keyword inside a function is undefined
// "use strict"
// function x() {
//     console.log(this)
// }
// x();

//
// "use strict"
// function x() {
//     console.log(this)
// }
// x();
// window.x();

//
// (3)this inside non strict mode-(this substitution)
// this keyword become global object
//
//this keyword value depeneds on how this is called(window)
//
// (3)this in strict mode-(this substitution)
// if the value of this keyword is undefined or null
//this keyword will be replaced with global object

//only in non strict mode
// (4)this value depends on how this is called(window)
// (5)this inside a object's method
// "use strict"
// function x() {
//     console.log(this)
// }
// x();
// window.x();

// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this)
//     }
// }
// obj.x()

//
// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this.a)
//     }
// }
// obj.x()

//
// (6)call, apply, bind method(sharing methods)
// const student = {
//     name: "Akshay",
//     printName: function(){
//         console.log(this.name);
//     }
// }
// student.printName()
// const student2 = {
//     name: "alam",
// }
// student.printName.call(student2)

//
// (7)this inside arrow function
// //Arrow function does not have their own this
// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this)
//     }
// }
// obj.x();

//
// const obj = {
//     a: 10,
//     x: () =>{
//         console.log(this)
//     }
// }
// obj.x();

//this inside nested arrow function
// const obj2 = {
//     a: 20,
//     x: function(){
//         const y = () => {
//             console.log(this)
//         }
//         y()
//     }
// }
// obj2.x();


//
// (8)this inside nested arrow function
// const obj2 = {
//     a: 20,
//     x: function(){
//         console.log(this)
//         // const y = () => {
//         //     console.log(this)
//         // }
//         // y()
//     }
// }
// obj2.x();

//
// const obj2 = {
//     a: 20,
//     x: function () {
//         //enclosing lexical context
//         const y = () => {
//             console.log(this)
//         }
//         y()
//     }
// }
// obj2.x();
// (9)this inside DOM

//DIfferent between function and method
//refrence to the html element