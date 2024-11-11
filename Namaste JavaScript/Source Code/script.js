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
// var getName2 = function () {
//     console.log("Namaste Javascript");
// }
// // function getName2(){
// //     console.log("Namaste Javascript");
// // }
// var getName = () => {
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


//Lecture 5: this is Shortest JS Program
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

//lexical environment is created when the execution environment is
// created(lexcial Environment = Local memory + lexcial environment of parents)
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

//
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
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a)

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



//Prototype
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
// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
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


//Closure for function currying, encapsulation, data hiding
// var counter = 0;
// function incrementCounter(){
//     counter++;
// }

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

//
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


////////////////////////////
//Lec15 First class Functions
//A function without name is known as anonnymouns function.
//
// Function declarations are hoisted, meaning they can be called before they are declared. Function expressions,
//  on the other hand, are not hoisted, so they cannot be invoked before they are defined.
//  Additionally, function expressions can be anonymous or named, while function declarations must always be named.
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


//Functuion Decleration

//Anonnymous Function
// function(){

// }

//Named Function Expressions
// var b = function xyz(){
//     console.log("A called")
// }
// b();
// xyz();

//
// var b = function xyz(){
//     console.log("A called")
// }
// b();
// // xyz();

//Difference between Parameters & Arguments?
// var b = function (param1, param2){
//     console.log(param1, param2)
// }
// b(1, 2);

//First class functions
//the ability of functions to be used as values and can be pass this in an argument to another functions and can be returned from the functions is the ability

//Arrow Functions


//Lec16 Callback Functions in Js ft Event Listeners
//(1)Whay is callback functions in JavaScript
// A callback is a function passed as an argument to another function This technique allows a function to call another function A callback function can run after another function has finished
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// setTimeout(function(){
//     console.log("Timer");
// }, 5000);

// function x(y){
//     console.log("x");
// }
// x(function y(){
//     console.log("y");
// });

//
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


// Lec17 Asynchronous JavaScript and Event Loop 


// Lec18 JS Engine Exposed Google V8 Architecture
//You need Javascript runtime environment to run js code

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



//Lec19 Map, filter and reduce
// const arr = [5, 1, 3, 2, 6];
// //Double-[10, 2, 6, 4, 12]
// //Triple-[15, 3, 9, 6, 18]
// //Binary - ["101", "1", "11", "10", "110"]

// // function double(x){
// //     return x * 2;
// // }
// // const output = arr.map(double);
// // console.log(output);

// const output2 = arr.map((x)=> x.toString(2));
// // const output2 = arr.map(function binary(x){
// //     return x.toString(2);
// // });
// console.log(output2);

//Filter Method
// const arr = [5, 1, 3, 2, 6];

// function isOdd(x){
//     // return x%2;//for odd
//     return x%2 === 0;//for even
// }
// const output = arr.filter(isOdd);
// console.log(output);


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

// //By reducer 
// const output2 = arr2.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// })
// console.log(output2)

// //Find Max value
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
// const output3 = arr2.reduce(function(max, curr){
//      if(curr>max){
//         max = curr 
//      }
//     return max;
// }, 0)
// console.log(output3)


///
const users = [
    { firstname: "Akshay", lastname: "Saini", age: 25 },
    { firstname: "Noor", lastname: "Alam", age: 24 },
    { firstname: "Elon", lastname: "Musk", age: 45 },
    { firstname: "Deepika", lastname: "Padkone", age: 24 },
]
//List of full names
//["Noor Alam", "Akshay Saini", ....]

// const output = users.map((x) => x.firstname + " " + x.lastname)
// console.log(output)
//
// const output = users.reduce(function (acc, curr) {
//     if (acc[curr.age]) {
//         acc[curr.age] = ++acc[curr.age];
//     } else {
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})
// console.log(output)

const output = users.filter((x) => x.age<30).map((x) => x.firstname);
console.log(output)

