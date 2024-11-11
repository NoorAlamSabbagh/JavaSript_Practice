//Lecture(1)JavaScript Global Execution Context
// x = 30;
// console.log(`Value of X 1 is ${x}`);
// var x = 20;
// console.log(`Value of X 2 is ${x}`);


//
// console.log("Global Execution Context starts");
// var globalVariable = "I am  global varaible";

// function globalFunction(){
//     console.log("Inside global function");
// }
// console.log(globalVariable);
// globalFunction();
// console.log('Global Execution Context ends');

//
// console.log("Global Execution Context starts");
// var globalVariable = "I am  global varaible";

// console.log(globalVariable);
// globalFunction();
// console.log('Global Execution Context ends');

// function globalFunction(){
//     console.log("Inside global function");
// }


//
// console.log("Global Execution Context starts");
// var globalVariable = "I am  global varaible";

// console.log(globalVariable);
// globalFunction();//undefined
// console.log('Global Execution Context ends');

// var globalFunction = function(){
//     console.log("Inside global function");
// }

//<============Hoisting==============>
//Hoisting is a concept or behaviour of javaScript where the declaration of function, varible or class goes to the top of the scope they were defined in.
//Let const, var sab hoist hote jabki let and const create temporal dead zone
//<============Temporal Dead Zone==============>
//TDZ is a period of time between the  creation of a variable with let or const and its decleration. During this period, the varible exits but cannot be accessed.
// console.log(`Value of X 1 is ${x}`);
// var x = 20;
// console.log(`Value of X 2 is ${x}`);

// //
// console.log(`Value of X 1 is ${x}`);
// let x = 20;
// console.log(`Value of X 2 is ${x}`);

//
// console.log(`Value of X 1 is ${x}`);
// var x = 20;
// console.log(`Value of X 2 is ${x}`);

// //
// console.log(`Value of X 1 is ${x1}`);
// let x1 = 20;
// console.log(`Value of X 2 is ${x1}`);

//
// x = 20;
// console.log(`Value of X 2 is ${x}`);
// let x = 20;
// console.log(`Value of X 2 is ${x}`);


//<=======Lecture2: How JavaScripts Works- Call Stack, Event Loop and Queue Explained=============>
//  console.log("Start of the script 2");

// setTimeout(()=>{
//     console.log("This is from the task Queue(SetTimeOut)");
// },0)
// console.log("End of Script");


//
// console.log("Start of the script 2");

// setTimeout(()=>{
//     console.log("A");
// }, 0);

// setTimeout(()=>{
//     console.log("B");
// }, 0);

// setTimeout(()=>{
//     console.log("C");
// }, 2*1000)
// console.log("End of Script");
// console.log("Bye Bye");


//
//console.log("Start of the script 2");

// setTimeout(()=>{
//     console.log("This is from the task Queue(SetTimeOut)");
// },0);

// Promise.resolve().then(()=>{
//     console.log("This is from the Micro task Queue(Promise)");
// })
// console.log("End of Script");


//<=======Lecture3: Objects in JavaScripts - Function Constructors and ES6 Class============>
// JavaScript Object Literal is a data type used to define objects in JavaScript.
// An object literal is a list of name:value pairs inside curly braces {}.
//This does not acts as Object literal.

//
// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// const person = {
//     fname: "Piyush",
//     lname: "Garg",
//     contact: "99999999",
//     getname: function(){
//         console.log("Piyush");
//     }
// };
// // console.log("Person", person);
// console.log("Person", person.getname());


//
// const person2 = {
//     fname: "John",
//     lname: "Doe",
//     contact: "99999999",
//     getname: function(){
//         console.log("Piyush2");
//     }
// };
// // console.log("Person", person);
// console.log("Person", person2.getname());


//
//Normal function  ---camelCasing used
//getAge(), getNums(), printThis()

//
//Constructor -- Blue print for functions
//PascalCasing
// function Person(fname, lname, contact){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.getName = function(){
//         console.log(this.fname, this.lname);
//     }
// }
// const person1 = new Person("Noor", "Alam", "00000000000");
// console.log(person1)
// const person2 = new Person("Noor2", "Alam2", "000000000002");
// console.log(person2)
// const person3 = new Person("Noor3", "Alam3", "000000000003");
// person3.getName();
// console.log(person3)



//
// function Person(fname, lname, contact){
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.getName = function(){
//         console.log(this.fname, this.lname);
//     }
//     this.getContact = function(){
//         console.log(this.contact);
//     }
// }
//  // const person1 = new Person("Noor", "Alam", "00000000000");
// // console.log(person1)
// // const person2 = new Person("Noor2", "Alam2", "000000000002");
// // console.log(person2)
// const person3 = new Person("Noor3", "Alam3", "000000000003"); //person3 is a object of Person base
// person3.getName();
// person3.getContact();
// // console.log(person3.fname)
// // console.log(person3)


//<-------------Before ES6----------------->
//before es6 we use object literal 
// .{}  Object Literal
// . function constructor

//After Es6 function constructor is depricated and class keyword is used
// class Person {
//     constructor(fname, lname, contact) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact;
//     }
//     getContact() {
//         console.log(this.contact);
//     }
//     getName() {
//         console.log(this.fname, this.lname);
//     }
// }
// const person1 = new Person("Noor", "Alam", "00000000000");
// const person2 = new Person("Noor2", "Alam2", "000000000002");
// const person3 = new Person("Noor3", "Alam3", "000000000003");
// console.log(person1)
// console.log(person2)
// person3.getContact();


//<=======Lecture3: Prototypes & prototypal Inheritance ============>
// const p1 = {
//     fname: "Piyush",
//     lname: "Garg",
//     getFullname(){
//         return `${this.fname} ${this.lname}`
//     }
// };
// const p2 = {
//     fname: "Noor",
//     lname: "Alam",
//     getFullname(){
//         return `${this.fname} ${this.lname}`
//     }
// };
// console.log(p1.getFullname())


//
// const p1 = {
//     fname: "Piyush",
//     lname: "Garg",
//     getFullname(){
//         return `${this.fname} ${this.lname}`
//     }
// };
// const p2 = Object.create(p1)//p2={__proto__: p1}
// // console.log("p1 is", p1)
// // console.log("p2 is", p2)
// // console.log("p2 is", p2.fname)
// console.log("p2 is", p2.getFullname())

//
// const p1 = {
//     fname: "Piyush",
//     lname: "Garg",
//     getFullname(){
//         return `${this.fname} ${this.lname}`
//     }
// };
// const p2 = Object.create(p1)
// console.log("p1 is", p1.fname);
// p2.__proto__.fname = "Hack";
// console.log("p1 after is", p1.fname);

//
// let fname = "Piyush Garg";
// let x = 10;
// console.log(fname.__proto__);
// console.log(fname.at(2));

//
// const p1 = {
//     xp1: "I am inside P1",
// };
// const p2 = {
//     xp2: "I am inside P2",
//     __proto__: p1
// };
// const p3 = {
//     xp3: "I am inside P3",
//     __proto__: p2
// };

//
class Student {
    constructor() {
        this.fname = "Piyush";
    }
    getName() {
        return this.fname;
    }
}
const s1 = new Student();
const s2 = {__proto__: Student.prototype};

//
//     __proto__ is the actual object that is used in the lookup chain to resolve methods, etc. prototype is the object that is used to build __proto__ when you create an object with new:

// ( new Foo ).__proto__ === Foo.prototype
// ( new Foo ).prototype === undefined