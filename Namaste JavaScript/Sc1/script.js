//Lecture 2
// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans
// }
// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);
// console.log(square4);

//
// var a = 10;
//  function getName(){
//     console.log("Hi Noor");
//  }
//  getName();
//  console.log(a);

//
// getName();
// console.log(a);
//Hoisting:Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
// hoisting allows you to use functions and variables before they're declared
// var a = 10;
//  function getName(){
    // console.log("Hi Noor");
//  }

//
//callStack
// var x = 7;
// function getName() {
//     console.log("Namaste JavaScript")
// }
// getName()
// console.log(x);
// console.log(getName);



//Lecture 3
//
// var x = 7;
// function getName() {
//     console.log("Namaste JavaScript")
// }
// getName()
// console.log(x);

//
//hoisting :Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
// getName()
// console.log(x);
// var x = 7;
// function getName() {
//     console.log("Namaste JavaScript")
// }


//
// getName();
// console.log(x);
// console.log(getName);
// var x = 7;
// function getName() {
//     console.log("Namaste JavaScript")
// }

//another way for function
// getName();
// console.log(x);
// console.log(getName);
// var x = 7;

// function getName() {

// }

//
//getName is not a function
// var getName = () => {
//     console.log("Namaste JavaScript")
// }



//Lecture 4: How Functions work in JS
// var x = 1;
// a();
// b();

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }


//Lecture 5: Shortest JS Program
// var a = 10;
// function b() {
//     var x = 10;
// }
// console.log(window.a)
// console.log(a)
// console.log(this.a)


//Lecture 6: Undefined vs defined
// console.log(a);
// var a = 7;
// console.log(a);

//
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "helloworld";
// console.log(a);


//
// var a;
// a = 10;
// if (a === undefined) {
//     console.log("a is undefined")
// }
// else {
//     console.log("a is not undefined")
// }



//Lecture 8: The scope chain, Scope and Lexical Environment
// function a() {
//     console.log(b);
// }
// var b = 10;
// a();

//
// function a() {
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// var b = 10;
// a();

//lexical environment is created when the execution environment is created(lexcial Environment =Local memory + lexcial environment of parents)
//
// function a() {
//     var b = 10;
//     c();
//     function c() {

//     }
// }

// a();
// console.log(b);


//
// let returnLarger = (arr, num) => arr.filter(n => n > num);

// console.log(returnLarger([65, 16, 0, 6, 64, 1, 68], 16))
// console.log(returnLarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50))


//Lecture 9: let & const in JS(Temporal Dead Zone)
// console.log(b);
// let a = 10;
// var b = 100;

//Temporal Dead Zone:Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed.
// Cannot access 'a' before initialization
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope
//its show error
// console.log(x);
// let a = 10;
// var b = 100;

//
// but we can do so in case of const
// let a;
// const b;// Missing initializer in const declaration
// const b = 1000;//TypeError: Assignment to constant variable
// b = 1000;
// a = 10;
// console.log(b);

//
// let a = 1900;
// let a = 100;
// const b = 100;
// a = 10;
// console.log(a)

//
//let a is in temporal dead zone
// console.log(a)
// let a = 1900;

// const b = 100;
// a = 10;
// console.log(a)


//Lecture 10: BLOCK SCOPE & Shadowing In JS-------------------------------------
//SCOPE:Scope determines the accessibility (visibility) of variables. JavaScript has 3 types of scope: Block scope; Function scope; Global scope ..
//BLOCK SCOPE : This scope restricts the variable that is declared inside a specific block, from access by the outside of the block
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);



//
//Shadowing:shadowing occurs when a variable declared in a certain scope (e.g. a local variable) has the same name as a variable in an outer scope (e.g. a global variable)
// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

//its valid shadowing
// let a = 20;
// {
//     let a = 20;
// }

//its not a valid shadowing
// let a = 20;
// {
//     var a = 20;
// }

//
// let a = 20;
// function x() {
//     var a = 20;
// }

//
// const a = 20;
// function x() {
//     var a = 20;
// }

//
//What is Lexical Scope in JavaScript? Lexical scope is the definition area of an expression. In other words, an item's lexical scope is the place in which the item got created
// const a = 20;
// {
//     const a = 100;
//     {
//         const a = 200;
//     }
//     console.log(a);
// }


//Lecture 11: QnA-------------------------------------

//Lecture 12: Closures in JS----------------------------
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
//Closures: function along with its lexcical scope bundle together form a closures

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

//
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// x();

//
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();
// console.log(z);
// //............
// z();

//its same as above code but its look cool code so i did so
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }

// }
// var z = x();
// console.log(z);
// //............
// z();

//
// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);
// //............
// z();


//
// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();



//
//Lec16: Callback Functions
//calling a function into another function as a parameter is called callback function
// function x(y){

// }
// x(function y(){

// })


//
// setTimeout(function(){
// console.log("timer")
// }, 5000)

// function x(y){
// console.log("x");
// y()
// }
// x(function y(){
// console.log("y")
// })


//
// var talk = function(fx){
//     fx();
// }
// var sayHi = function(){
//     console.log("hi");
// }

// talk(sayHi)

//
// function sum(a,b){
//     return a+b;
// }
// function calc(fx,a,b){
//     return fx(a,b)
// }
// console.log(calc(sum,4,5))

//
// function doSomething(callback) {
//     callback("Hello, World!");
//   }
  
//   function callbackFunction(message) {
//     console.log("Callback function executed with message:", message);
//   }
  
//   doSomething(callbackFunction);





















