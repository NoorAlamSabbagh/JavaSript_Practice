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
// console.log(x);
// var x = 7;
// console.log(getName);
// function getName(){
//     console.log("Namaste Javascript");
// }


//
// getName();
// console.log(a);
// // Hoisting:Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
// // hoisting allows you to use functions and variables before they're declared
// var a = 10;
//  function getName(){
// console.log("Hi Noor");
//  }

//
//callStack
// getName()
// console.log(x);
// console.log(getName);
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
//hoisting: Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.
// // Hoisting:Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
// // hoisting allows you to use functions and variables before they're declared
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
// // var getName = function () {//TypeError: getName is not a function because getname act as a new variiable 
// //     console.log("Namaste Javascript");
// // }
// // function getName(){
// //     console.log("Namaste Javascript");
// // }
// var getName = () => {//TypeError: getName is not a function
//     console.log("Namaste Javascript");
// }

//
// var x = 7;
// function getName(){
//     console.log("Namaste JavaScript");
// }
// getName();
// console.log(x);
// console.log(getName);

//
// getName();
// console.log(x);
// console.log(getName);
// var x = 7;
// function getName(){
//     console.log("Namaste JavaScript");
// }

//
// getName();
// console.log(x);//undefined
// console.log(getName);//[Function: getName]
// var x = 7;
// function getName() {

// }
// // getName is not a function
// var getName = () => {
//     console.log("Namaste JavaScript")
// }



//Lecture 4: How Functions work in JS
//
// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }

//
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

//<====================Call Stack =======================>
// https://www.javatpoint.com/javascript-call-stack
//Callstack knowns as various names like execution context stack, program stack, control stack, runtime stack, machine stack.
//In order to manage the execution contexts, the JavaScript engine uses a call stack
// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. 
//It has information on what function is being run and what functions are invoked from within that function.


//<=================Lecture 5: this is Shortest JS Program ============>
// The this keyword refers to different objects depending on how it is used:
//Whenever js code is run  a global object is created, a global execution context is created along execution contest this is created.
// var a = 10;
// function b() {
//     var x = 10;
// }
// console.log(window.a)
// console.log(a)
// console.log(this.a)

//Lecture 6: Undefined vs defined
// "undefined" indicates that a variable has been declared but not given a value,
//  while "not defined" indicates that a variable does not exist
// console.log(a);
// var a = 7;
// console.log(a);

//JS is a Loosely type language it does not attach to its variable to any specific data type. 
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "helloworld";
// console.log(a);


//
//var a;
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
//lexical environment is created when the execution environment is
// created(lexcial Environment = Local memory + lexcial environment of parents)
//
// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

//
// function a() {
//     var b = 10;
//     c();
//     function c() {
//     }
// }
// a();
// console.log(b);//ReferenceError: b is not defined


//
// let returnLarger = (arr, num) => arr.filter(n => n > num);

// console.log(returnLarger([65, 16, 0, 6, 64, 1, 68], 16))
// console.log(returnLarger([6, 46, 54, 6, 56, 54, 65, 4, 65], 50))


//<==================Lecture 9: let & const in JS(Temporal Dead Zone)===============>
// console.log(b);
// let a = 10;
// var b = 100;

//
// console.log(x);//ReferenceError: x is not defined
// // console.log(a);//ReferenceError: Cannot access 'a' before initialization
// let a = 10;
// var b = 100;

//
// console.log(a);//SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// let a = 100;

//
// let a = 1900;
// const b ;//SyntaxError: Missing initializer in const declaration
// a = 10;
// console.log(a);

//
// let a = 100;
// const b = 100;
// a = 10;
// console.log(a);

//
// let a = 1900;
// const b = 1000;
// b = 1000;//TypeError: Assignment to constant variable.
// a = 10;
// console.log(a);


//
// EvalError: Raised when the eval() functions is used in an incorrect manner.
// RangeError: Raised when a numeric variable exceeds its allowed range.
// ReferenceError:If you are trying to access a variable before declaring it. Raised when an invalid reference is used.
// SyntaxError: If you are messed with javascript syntax. Raised when a syntax error occurs while parsing JavaScript code.
// TypeError: If you are trying to reassign a value to a constant variable. Raised when the type of a variable is not as expected.
//

// console.log(b);
// console.log(a);
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
//{ } : A block of code is a set of statements that are grouped together.
//with all the variable and function inside this block
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
// console.log(a)

// //
// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b)

//
// const c = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c)


//
// // var a = 100;
// // let a = 100;
// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a)
// console.log(b)

//
// // let a = 100;
// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a)
// console.log(b)


//
// // const a = 100;
// const b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a)
// console.log(b)

//
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);

//its valid shadowing
// let a = 20;
// {
//     let a = 20;
// }

//its a valid shadowing
// const c = 100;
// function x(){
//     const c = 30;
//     console.log(c);
// }
// x();
// console.log(c);

//
// var a = 20;
// {
//     let a = 20;
// }

//
// // its not a valid shadowing
// let a = 20;
// {
//     var a = 20;
// }
// // its not a valid shadowing
// const a = 20;
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

//
//What is Lexical Scope in JavaScript? Lexical scope is the definition area of an expression.
//  In other words, an item's lexical scope is the place in which the item got created
// const a = 20;
// {
//     const a = 100;
//     {
//         const a = 200;
//     }
//     console.log(a);
// }


//Lecture 11: QnA-------------------------------------

//Lecture 10: Closures in JS----------------------------
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.
//Closures: function along with its lexcical scope bundle together form a closures

//Uses of Closures
//1. Module Design Pattern
//2. Currying       
//3. Function Factory
//4. Memoization
//5. setTimeouts
//6. Iterators
//7. Maintaining State in Asynchronous Programming

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



//Prototype
// Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//  In this article, we explain what a prototype is, how prototype chains work, and how a prototype for an object can be set.
// let arr = ["Noor", "Alam", "Nehal"];
// let object = {
//     name: "Noor Alam",
//     city: "Lucknow",
//     getIntro: function(){
//         console.log(this.name + "from" + this.city)
//     }
// }
// let object2 = {
//     name:"Aditya",
// }

// object2._proto_= object;

//
// let a = {
//     name: "Harry",
//     language: "JavaScript",
//     run: () =>
//     alert("Self Run")
// }
// console.log(a)

// let p = {
//     run: ()=>{
//         alert("run")
//     }
// }
// a.__proto__ = p
// a.run();


//
// let b = {
//     name: "Nehal",
//     Qualification: "Btech"
// }
// let c = {
//     name2: "Nehal",
//     Qualification: "Electronics"
// }

// b.__proto__ = c
// console.log(b.name2)


//
// console.log("START");

// const yourName = 'abc';
// function getName(name){
//     name = this.name;
// return name;
// }

// person = {
//     name: "John",
//     getName: getName
// }
// const fruits = ['Apple', 'Banana', 'Grapes']
// for(vari=0; i<2; i++){
//     console.log(fruits[i])
// }

// console.log(getName(person.getName(yourName)));

//
//Lecture 11: SetTimeOut Closure Interviews Question-------------------------------------
// function x(){
// var i = 1;
// setTimeout(function(){
//     console.log(i);
// }, 1000);
// }
// x();


//
// function x(){
// var i = 1;
// setTimeout(function(){
//     console.log(i);
// }, 3000);
// console.log("Namaste JavaScript");
// }
// x();

//Its behaving for closure
//A closure is like function along with its lexical environment right so even when function is taken out from its original scope right 
// if it is executed in some other scope
//When the settimeout takes this function and stores it somewhere and attaches a timer so that function remembers the reference to i
//
// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

//
// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//         // }, i*1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();

//closesure function close() call everytime  every copy of x 
// function x(){
//     for(var i=1; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             }, x*1000);
//         }
//         close(i)
//     }
//     console.log("Namaste JavaScript");
// }
// x();


//
// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();



//Lec14 Crazy JS Interview ft Closures
// advatages of closure in js:
// 1. Data Encapsulation
// 2. Currying 
// 3. Function Factory
// 4. Memoization
// 5. Maintaining State in Asynchronous Programming
// 6. Module Design Pattern
// 7. setTimeouts
// 8. Iterators

//disadvantages of closure in js:
// 1. Memory Leak
// 2. Encapsulation
// 3. Performance Issue
// 4. Security Issue
// 5. Garbage Collection
// 6. Global Variables
// 7. Memory Consumption

//
// function outer(){
//     var i = 10;
//     function inner(){
//         console.log(i)
//     }
//     inner();
//     return inner;
// }
// outer();

// //
// function outer(){
//     var i = 10;
//     return function inner(){
//         console.log(i)
//     }
//     // inner();
//     // return inner;
// }
// outer()();


//
// function outer(){
//     var i = 10;
//     function inner(){
//         console.log(i)
//     }
//     return inner;
// }
// // outer();
// // outer()();
// var close = outer();
// close();

//
// function outer(){
//     function inner(){
//         console.log(i)
//     }
//     var i = 10;
//     return inner;
// }
// // outer();
// // outer()();
// var close = outer();
// close();

//
// function outer(){
//         function inner(){
//             console.log(i)
//         }
//         let i = 10;
//         return inner;
//     }
//     // outer();
//     // outer()();
//     var close = outer();
//     close();

//
// function outer(b){
//     function inner(){
//         console.log(i, b)
//     }
//     let i = 10;
//     return inner;
// }
// // outer();
// // outer()();
// var close = outer("helloWorld");
// close();


//
// function outest(){
// var c = 20;
//     function outer(b){
//         function inner(){
//             console.log(i, b, c)
//         }
//         let i = 10;
//         return inner;
//     }
//     return outer;
// }
// // outer();
// // outer()();
// var close = outest()("helloWorld");
// close();

//
// function outest(){
// var c = 20;
//     function outer(b){
//         function inner(){
//             console.log(a, b, c)
//         }
//         let a = 10;
//         return inner;
//     }
//     return outer;
// }
// let a = 100;
// // outer();
// // outer()();
// var close = outest()("helloWorld");
// close();

//
// function outest(){
//     var c = 20;
//         function outer(b){
//             function inner(){
//                 console.log(a, b, c)
//             }
//             // let a = 10;
//             return inner;
//         }
//         return outer;
//     }
//     let a = 100;
//     // outer();
//     // outer()();
//     var close = outest()("helloWorld");
//     close();

//Closure for function currying, encapsulation, data hiding
// var counter = 0;
// function incrementCounter(){
//     counter++;
// }

//encapsulation exapmle
// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter()// It cannnot acces directly because of closure encapsulation;
// counter1();


//
// function counter(){
//     var count = 0;
//     return function incrementCounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1 = counter()// It cannnot acces directly because of closure encapsulation;
// counter1();
// counter1();

// var counter2 = counter()// It cannnot acces directly because of closure encapsulation;
// counter2();
// counter2();counter2();counter2();counter2();

//
//use constructor function for optimization
// function Counter(){
//     var count = 0;
//     this.incrementCounter = function (){
//         count++;
//         console.log(count);

//     }
//     this.decrementCounter = function (){
//         count--;
//         console.log(count);

//     }
// }
// var counter1 = new Counter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

//
//garbage collector code
// function a(){
//     var x = 0;
//     return function b(){
//         console.log(x);
//     }
// }
// var y = a();    
// y();


//
// function a(){
//     var x = 0; z= 10;
//     return function b(){
//         console.log(x);
//     }
// }
// var y = a();    
// y();

//
// function createObject() {
//     let obj = { name: "John Doe" };  // Object is created in memory
//     console.log(obj.name);  // Output: John Doe
// }

// createObject(); // Function runs, object exists only inside function

// // After this function executes, `obj` is no longer accessible
// // The garbage collector will reclaim the memory used by `obj`

//
// let cache = {};

// function createUser() {
//     cache.user = { name: "Alice" }; // Stored in global object
// }

// createUser();
// console.log(cache.user); // { name: "Alice" }

// // If we don’t remove the reference, the object stays in memory
// delete cache.user; // Now, the object is eligible for garbage collection

//
////////////////////////////
//Lec15 First class Functions
// In JavaScript, first-class functions mean that functions are treated as first-class citizens. This means functions can be:
// Assigned to variables.
// Passed as arguments to other functions.
// Returned from other functions
// Stored in data structures (like arrays or objects).
// JavaScript treats functions just like any other value (e.g., numbers, strings, or objects), making it a powerful feature of the language.

//
//A function without name is known as anonnymouns function.
//
// Function declarations are hoisted, meaning they can be called before they are declared. 
// Function expressions, on the other hand, are not hoisted, so they cannot be invoked before they are defined.
//  Additionally, function expressions can be anonymous or named, while function declarations must always be named.

//
//Functions Statement aka function decleration
// a();
// function a(){
//     console.log("A called")
// }
// a();

// //Function Expressions
// b()
// var b = function(){
//     console.log("A called")
// }
// b();

//
//Difference between function decleration and function expression
//function expression is not hoisted but function decleration is hoisted
// a();
// b();//TypeError: b is not a function

// //function statement aka function decleration
// function a(){
//     console.log("A called")
// }

// //function expression
// var b = function(){     
//     console.log("B called")     
// }

//
//Functuion Decleration

//Anonnymous Function
// function(){

// }

// //Named Function Expressions
// var b = function xyz(){
//     console.log("A called")
// }
// b();
// xyz();//ReferenceError: xyz is not defined

//
// var b = function xyz(){
//     console.log("A called")
// }
// b();
// // xyz();

//Difference between Parameters & Arguments?
//Parameters are the names listed in the function definition. 
//Arguments are the real values passed to the function.
// var b = function (param1, param2){
//     console.log(param1, param2)
// }
// b(1, 2);

//First class functions
//the ability of functions to be used as values and can be pass this in an argument to another functions and can be returned from the functions is the ability

//Arrow Functions


//Lec16 Callback Functions in Js ft Event Listeners
//(1)What is callback functions in JavaScript
// function x(){
//     console.log("x")
// }
// x(function y(){
//     console.log("y")    
// })
// #A callback is a function passed as an argument to another function This technique allows a function to call another function
//  A callback function can run after another function has finished
// #A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
// #A callback is a function passed as an argument to another function, allowing the latter to execute the callback function at a specific time, 
// often after completing an operation.
//  Callbacks are a foundational concept in JavaScript, enabling asynchronous programming and modular code design.

//https://www.geeksforgeeks.org/javascript-callbacks/
//
// function greet(name, callback) {
//     console.log(`Hello, ${name}!`);
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }
// greet("GFG", sayGoodbye);

//
// function mainFunction(callback) {
//     console.log("Performing operation...");
//     // Use setTimeout to simulate an asynchronous operation
//     setTimeout(function() {
//       callback("Operation complete");
//     }, 1000);
//   }

//   // Define the callback function
//   function callbackFunction(result) {
//     console.log("Result: " + result);
//   }

//   // Call the main function with the callback function
//   mainFunction(callbackFunction);

//
// let numbers = [1, 2, 3, 4, 5];
// function mainFunction(callback) {
//   console.log("Performing operation...");
//   numbers.forEach(callback);
// }
// function callbackFunction(number) {
//   console.log("Result: " + number);
// }

// mainFunction(callbackFunction);

//
// document.getElementById("Click Me").addEventListener("click", function xyz() {
//     console.log("Button clicked");
// });
// document.getElementById("myButton").addEventListener("click", function xyz() {
//     console.log("Button clicked");
// });

//
// function attachEventListener() {
//     let count = 0;
//     document.getElementById("myButton").addEventListener("click", function xyz() {
//         console.log("Button clicked", ++count);
//     });
// }
// attachEventListener();


//
// setTimeout(function(){
//     console.log("Timer");//third console: Timer
// }, 5000);

// function x(y){
//     console.log(y);//first console: [Function: y]
//     console.log("x");//second console: x
// }
// x(function y(){
//     console.log("y");
// });


// setTimeout(function(){
//     console.log("Timer");
// }, 5000);

// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){
//     console.log("y");
// });

//(2)Javascript is a synchronous and single-threadec language

//(3)Blocking the main thread

//(4)Power of Callbacks

//(5)Closure Demo with Event Listeners

//(6)Garbage Collection and removeEvent Listeners
// function attachEventListener() {
//     let count = 0;
//     document.getElementById("myButton").addEventListener("click", function xyz() {
//         console.log("Button clicked", ++count);
//     });
// }
// attachEventListener();


// <====================== Lec17 Asynchronous JavaScript and Event Loop ===============>
//Callstack present inside the JS engine
//JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events,
// and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

//
// function a(){
//     console.log("a");
// }
// a();
// console.log("Namaste JavaScript");

//
// console.log("Start");
// setTimeout(function cb() {
//     console.log("callback");
// }, 5000);
// console.log("End");

//
// console.log("Start");
// document.getElementById("myButton").addEventListener("click", function cb() {
//     console.log("Button Clicked");
// }); 
// console.log("End");

//Why do we need callback queue
//when we click multiple/ continously on button then it will be added to the callback queue and it will be executed one by one

//
// console.log("Start");//(1)console: Start
// setTimeout(function cbT() {
//     console.log("CB SetTimeout");//(4)console: CB SetTimeout
// }, 5000);
// fetch("https://api.github.com/users")//WEB API
// .then(function cbF(){   
//     console.log("CB Fetch");//(3)console: CB Fetch
// });
// console.log("End");//(2)console: End

//Microtask Queue   
//Microtasks are usually scheduled for things that should happen straight after the currently executing script,
//such as reacting to a batch of actions, 
// or to make something async without taking the penalty of a whole new task.
//Microtasks include mutation observer, promise, queueMicrotask, process.nextTick, MutationObserver, and the microtask queue.


//Browser is not a part of JS engine and inside JS engine callstack present and inside callstack GEC created
// and inside the browser we have web APIs like DOM, AJAX, Timeout, localstorage, console, location etc
//We have callback queue and event loop
//The event loop is a mechanism that makes sure the call stack is empty before processing the callback queue.

//////////////
// The event loop concept is very simple. There’s an endless loop,
// where the JavaScript engine waits for tasks, executes them and then sleeps, waiting for more tasks.

// <========================Lec18 JS Engine Exposed Google V8 Architecture =================>
//You need Javascript runtime environment to run js code
//javascript runtime environment is a program that includes the javascript engine and the web APIs
//The V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers,
// Lec18 Higher Order Functions
//A function which take a functions as an argument and return a function to it
// JavaScript Higher-Order Functions are functions that can accept other functions as arguments,
// return functions, or both. They enable abstraction and flexibility in code,
// allowing you to create reusable and modular functions for complex operations, making them essential in functional programming.

// function x(){
//     console.log("Namaste");
// }

// function y(x){
//     x();
// }

//
// const radius = [3, 1, 2, 4];
// const calculateArea = function(radius){
//     const output = [];
//     for (let i =0; i<radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function(radius){
//     const output = [];
//     for (let i =0; i<radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


//We are repeating same code again and again so we use DRY concept
// const radius = [3, 1, 2, 4];
// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius){
//     return 2*Math.PI * radius;
// }

// const diameter = function(radius){
//     return 2 * radius;
// }

// const calculate = function(radius, logic){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(logic(radius(i)));
//     }
//     return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
//we have javascript inbuilt method
//console.log(calculate(radius, area));


//<===============Lec17 Trust Issue with setTimeout==================>
//console.log("Start");//(1)console: Start
// setTimeout(function cb() {
//     console.log("callback");
// }, 5000);
// console.log("End");//(2)console: End

// //million
// let startDate = new Date().getTime()
// let endDate = startDate
// while(endDate<startDate+10000) {    
// endDate = new Date().getTime()
// }
// console.log("While loop has stopped")//(3)console: While loop has stopped

//
//<===============Lec18 Higher Order Function==================>
//A function which takes another function as an argument or return a function from it is known as Higher order function
//Higher order function is a function that takes a function as an argument, or returns a function.
// function x() {
//     console.log("x")
// }

// function y(x) {
//     x();
// }

//
// const radius = [3, 1, 2, 4];
// const calculateArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {  
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function(radius){
//     const output = [];
//     for (let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));

//
//logic are same in above code so we use DRY concept
// const radius = [3, 1, 2, 4];

// const area = function(radius){  
//     return Math.PI * radius * radius;
// }

// const circumference = function(radius){
//     return 2 * Math.PI * radius;
// }

// const diameter = function(radius){
//     return 2 * radius;
// }

// const calculate = function(radius, logic){
// // Array.pconst.calculate = function(radius, logic){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(logic(radius[i]));
//         // output.push(logic(this[i]));
//     }
//     return output;
// }

// console.log(radius.map(area));
// // console.log(radius.calculate(radius, area));//Array.pconst.calculate = function(radius, logic){
// // console.log(radius.calculate(area));
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));


//<===============Lec19 Map, filter and reduce==================>
//  map(), filter(), and reduce() are higher-order functions in JavaScript used to manipulate arrays in different ways.
//  Here’s how they differ
// 1. map()
// Purpose: Transforms each element in an array and returns a new array with the modified elements.
// Returns: A new array of the same length as the original.
// Use Case: When you want to modify each element in an array.
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]

//
// 2. filter()
// Purpose: Filters elements based on a condition and returns a new array with only the elements that satisfy the condition.
// Returns: A new array with fewer or the same number of elements.
// Use Case: When you want to remove certain elements from an array.
// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]

// 3. reduce()
// Purpose: Reduces the array to a single value by applying a function that accumulates results.
// Returns: A single value (number, string, object, etc.).
// Use Case: When you need to compute a cumulative value (like sum, average, or product).
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 10

//
// Function	         Purpose	                                                        Return Value	                            Use Case
// map()	         Transforms each element	                                        New array (same length)	                    Modifying elements
// filter()	         Selects elements based on condition	                            New array (fewer or same elements)	        Removing elements
// reduce()	         Aggregates values	Single value (number, object, etc.)	            Summing, averaging,                         accumulating data

//
//Lec19 Map, filter and reduce
// const arr = [5, 1, 3, 2, 6];
//Double-[10, 2, 6, 4, 12]
//Triple-[15, 3, 9, 6, 18]
//Binary - ["101", "1", "11", "10", "110"]

//
// const output1 = arr.map((x) => x * 2);
// console.log(output1);
//
// function double(x){
//     return x * 2;
// }
// const output = arr.map(double);
// console.log(output);

//
// const output2 = arr.map((x)=> x.toString(2));
// // const output2 = arr.map(function binary(x){
// //     return x.toString(2);
// // });
// console.log(output2);

//Filter Method
// const arr = [5, 1, 3, 2, 6];

// const output = arr.filter((x) => x <3);
// console.log(output);
//
// function isOdd(x){
//     // return x%2;//for odd
//     return x%2 === 0;//for even
// }
// const output = arr.filter(isOdd);
// console.log(output);

// difference between map and filter and reduce
//Map: Map is a method that creates a new array by performing a function on each array element.
//Filter: Filter is a method that creates a new array with elements that pass the test in
// a provided function. 
//Reduce: Reduce is a method that reduces the array to a single value.
//Map: Map is a method that creates a new array by performing a function on each array element.
//
//Reduce Method
// const arr2 = [5, 1, 3, 2, 6]
// //Sum or max
// function findSum(arr){
//     let sum = 0;
//     for(let i = 0;  i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr2));

//By reducer
// const arr2 = [5, 1, 3, 2, 6]
// const output2 = arr2.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// })
// console.log(output2)

// //Find Max value
// const arr2 = [5, 1, 3, 2, 6]
// function findMax(arr){
//     let max = 0;
//     for(let i = 0;  i < arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(findMax(arr2));

// //By reducer
// const arr2 = [5, 1, 3, 2, 6]
// const output3 = arr2.reduce(function(max, curr){
//      if(curr>max){
//         max = curr
//      }
//     return max;
// }, 0)
// console.log(output3)


///
// const users = [
//     { firstname: "Akshay", lastname: "Saini", age: 25 },
//     { firstname: "Noor", lastname: "Alam", age: 24 },
//     { firstname: "Elon", lastname: "Musk", age: 45 },
//     { firstname: "Deepika", lastname: "Padkone", age: 24 },
// ]
// //List of full names
// //["Noor Alam", "Akshay Saini", ....]

// // const output = users.map((x) => x.firstname + " " + x.lastname)
// // console.log(output)
// //
// // const output = users.reduce(function (acc, curr) {
// //     if (acc[curr.age]) {
// //         acc[curr.age] = ++acc[curr.age];
// //     } else {
// //         acc[curr.age] = 1;
// //     }
// //     return acc;
// // }, {})
// // console.log(output)

// const output = users.filter((x) => x.age<30).map((x) => x.firstname);
// console.log(output)
