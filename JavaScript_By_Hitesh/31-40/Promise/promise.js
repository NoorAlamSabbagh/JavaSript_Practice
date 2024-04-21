// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   setTimeout(function () {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

//
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 is resolved")
// })

//
//3)
// const promiseThere = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email: "chai@example.com"})
//     }, 1000);
// })

// promiseThere.then(function(user){
// console.log(user)
// })

//
// const promiseFOur = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Noor Alam", password: "1234"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//
// promiseFOur
// .then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
// console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>console.log("The promise is either resolved or rejected"))

//
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "JavaScript", password: "123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//     console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

//
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();


//
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((data)=>{
// console.log(data)
// })
// .catch((error)=> console.log(error))

//
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


fetch("./readme.txt")
.then(response=>response.text())
.then(data=>document.write(data));
