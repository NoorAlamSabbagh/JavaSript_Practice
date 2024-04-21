// alert("Instructor")

//Data types // number, string, boolean
//not a number
//not a sentence
// has to be a single word
// not collection of special characters
// if you want to inclide number, alwys use it after alphabets
// just 2 special characters are allowed ==== $ and _

// var numberOfStudents = 0

//PRIMITIVE DATA TYPES
// number, string, boolean, undefined, null

//NON PRIMITIVE DATA TYPES
//Object

//STORE ALL INFO OF AAKASH
// var studentInfo = {
//     name: "Aakash",
//     age: 83,
//     isHeAStudent: false,
//     studentFavNumbers: [1,3,4,21,32,56],
//     privateInfo: [false, "asdas"],
// }

// console.log(studentInfo)

// //arrays
// var primeNumbers = [
//   1,
//   "aviral",
//   true,
//   null,
//   {
//     name: "Aakash",
//     age: 83,
//     isHeAStudent: false,
//     studentFavNumbers: [1, 3, 4, 21, 32, 56],
//   },
//   {
//     hasGirlfriend: false,
//   },
//   [218123, 1243, 534, 54, 67],
// ];
// console.log(typeof primeNumbers);

//
// var x = null;
// console.log(x)

// console.log(typeof(numberOfStudents))
// numberOfStudents = "aviral"
// console.log(typeof(numberOfStudents))

// numberOfStudents = false
// console.log(typeof(numberOfStudents))
// console.log(numberOfStudents)

// var numberOfStudents = null;
// console.log(typeof(numberOfStudents))
// console.log(numberOfStudents)

// 1,2,3,4,65,7,100,5999.47236
// "Aviral", "Instroust of ns"
// true/false

// console.log(x)
// typescript
// js is a loosely typed language

//MIX AND MATCH DIFFERENT PRIMITIVE DATA TYPES

// var x = 1;
// var y = "2";

// var result = "$" + 4 + 5;

//  Number(x)
// Number(y)
//  Number(x) -  Number(y)

// console.log(result) 
// console.log(typeof(result))

// var name = 43;

// var name = 65

// x = 231

///////// let const

// let name = 45;
// let name = 323

// const name1 = "aviral"

// name1 = "treww"

// var x = 5;

// var x = 10

// x = "aviral"

// var y = 10;

// var y = "aviral"

// y = 15

// let name = 5;

// let name1 = 5;

// // x = "aviral"

// const x = 5;

// // const x = 10
// x = 6;
// // const x = 10;

//Functionss

// DRY ===> DON'T REPEAT YOURSELF

// var name1 = "aviral"

// var name2 = "newton"

// var result = name1 + name2

// ------------------------------

// var name3 = "Surbhi"
// var name4 = "newton"

// var result1 = name3+ name4
// console.log(result1)
// ------------------------------//



//Functions are first class in javascript
//FUNCTION DECLARATIONS
// function addTwoStrings(x) {
//     console.log('Hi my name is ' +  x)
// }

// // addTwoStrings("alam")


// addTwoStrings("aviral")
// addTwoStrings("debasis")

// console.log(addTwoStrings)
// console.log("hi aviral")



//FUNCTION EXPRESSIONS
// var calculateString;
// calculateString()
//  var calculateString = function (x) {
//      console.log('Hi my name is' + x)
//  };

 //
//  function decalrations
// function calculateString (fn1) {
//     // console.log(qwertyuiop);
//     // qwertyuiop();
//     // console.log(fn1)
//     return fn1
//     // console.log('Hi my name is')
// }

// function name2() {
//     console.log("aviral")
// }
// name2()

// calculateString(name2)

// calculateString(name2) //???

// console.log(result)
// result()
// calculateString(name2)()

// calculateString("aviral")

//arrow function
//IIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION

//SCOPE

// var x = "aviral" // global scope

// function sname() {
//     if(true) {
//         console.log(x)
//     }
// }

// sname()

// // alert() // globally scoped

// console.log("hgasdjkaghs")

//
// what is the scope of var?
// var scope is global WRONGGGG
// var scope is functional?????


// var name1 = "aviral"
// console.log(window.name1)

//
// function name1() {
//     if(true) {
//         let animalName = "elephant"
//         console.log(animalName) 
//     }
// }

// console.log("animalName")
// name1()

//VAR
//you can redeclare
//you can redefine
// VAR is functional scope
//var is hoisted

//let
//you can't redeclare
// you can redefine
// let is block scope
// let is not hoisted

//const
//you can't redeclare
// you can't redefine
// const is block scope
//const is not hoisted


//
// alert("aviral")
// var student = "Nitin"

// console.log(student)
// console.log(window.student)

// var animal ="elephant"
// console.log(animal)

// prompt('Enter your name')

// EXECTUION CONTEXT
// var student = "Nilesh"
// function getName() {
//     const student = "Nimisha";
//         function getNumber() {
//             const student = "Sneha"
//             console.log(student)   //??
//         }
//    getNumber()
// }

// getName()

//EXECTUION CONTEXT
// Hoisting ===>
// console.log(a)

// let a = "aviral";

// console.log(a)

// console.log(student) //??error
// console.log(student + animal)
// function getName() {
//     // var student = "Nimisha";
//         function getNumber() {
//             // var student = "Sneha"
//             // console.log(student)   //??
//         }
//    getNumber()
// }

// getName()
// let student;
// console.log(animal)

// var animal = "elephant"

// console.log(student)
// console.log(animal)

// x()
// function x() {
//     console.log('Hi i am function declaration')
// }
// x()

// var y;
// // y()
// y = function () {
//     console.log('Hi i am function expression')
// }
// y();

// loops and conditions
// for(let i =0 ; i<10; i++) {
//     console.log(i)
// }

//OPERATORS
// + , - * /

//ASSIGNMENT OPERATOR
// let x = 1

//compariosn operator
// == compares values
// === compares values as well as data type
// !=
// >, < , >=, <=
// (10>5) ? (3>2) ? console.log("this") : console.log("sdajkh") : consoe.log("no")
// false <= true

//logocal operator
// &&, ||

//searches for first false condition
// return the last condition
// 5<2 && 3>1 && console.log("aviral")

//searches for first true condition
// return the last one
// ||
// (5>10) && console.log("yess")

// ---------------------------------------new cLASS
// var x;
// var y;
// var getSum;
// console.log(x)
// console.log(b)
// x = 10;
// y =20;

// getSum = function() {
//     console.log(x+y)
// }

//100lines
// getSum(); // undefined

// IIFE === immediately invoked function expression
// var num1 = 10;
// var num2 = 20;

// var result = (function(x,y) {
//    return x+y
// }(num1,num2))

// console.log(result)

// var student  = "Nilesh";

// 2 things
//1. variable intialization; var name;
///2. variable assignment; name = 13;

// let student = "Nilesh"

// function getAnswer() {
//     console.log(student) //?? error
//     student = "Shivani";
//     console.log(student) //?? "Shivani";
// }
// getAnswer()
// getAnswer()
// console.log(sameer)
// let student2; //Temporal dead zone
// console.log(student2) //?? error
// student2 = "Shivani";
// (function() {
//     var student;
//     console.log(student) //undeined
//     student = "NILESH";
//     console.log(student) // Nilesh
// }())

// let car1 = "Tesla";

// (function() {
//     car3 = "volvo"
//     console.log(car3);  //1
//     var car2 = "Creta"
//     car2 ="audi"
//     console.log(car1) //2
// }())

// // console.log(car2) //3
// console.log(car3) //4
// // var car1 ="bmw"

// // animal = "elephant"

// console.log(abc)
// let abc = 10

//??

// Number("23aviral") ==== > ?

//7November 2022
// =========================dom(Document object modal) mainpulation===================

// JS FIDDLE CODE LINK ====> https://jsfiddle.net/srivastavaaviral1/hxuon4qm/132/

//Select any element // function predefined
//add any new elemt
//edit any elemet
//delete any element

// document.title = "Aviral's website"

//select elementby id

// let quote = "Aviral's  friend said something"

//getElementsByTagName
//getElementsByClassName
//getElementById
//querySelector
//querySelectorAll

// document.getElementById("main-header").style.color = "red"
// header.style.color = "red"

// let li = document.querySelectorAll(".list-group-item")
// console.log(li[0])

// let student = {
//     name: "aviral"
// }

//create non empty object
// let x1 = {}
// console.log(x1)

//
// let x = new Object()
// console.log(x)

//
// let student = {
//     name: "aviral",
//     age: 21,
//     getName: function () {
//         console.log("aviral")
//     }
// }
// console.log(student)//for key value pair
// console.log(student.name)
// console.log(student.age)
// console.log(student.getName)//I have to execute the function firwt then it print aviral
// student.getName()

//
// let student = {
//     name: "aviral",
//     age: 21,
//     getName: function () {
//         console.log("aviral")
//     },
//     physicalFeatures: {
//         hairColor: "black"
//     }
// }
// console.log(student)
// console.log(student.name)
// console.log(student.age)
// console.log(student.physicalFeatures.hairColor)
// student.getName()

//
// let student = {
//     name: "aviral",
//     age: 21,
//     getName: function () {
//         console.log("aviral")
//     },
//     "get age": false,
//     physicalFeatures: {
//         hairColor: "black"
//     }
// }
// console.log(student)
// console.log(student["get age"])
// console.log(student.name)
// console.log(student.age)
// console.log(student.physicalFeatures.hairColor)
// student.getName()

// student.isNewtonSchoolStudent = true;
//pass by referance and pass by value
// console.log(student)

// delete (student["get age"])
// console.log(student)

//
// delete(student.physicalFeatures.hairColor)
// console.log(student)

// let stduent = "Tauseef"

// console.log(stduent);

// student = "Sameer"
// console.log(student)

//
// let student = {
//     name: "aviral",
//     age: 21,
//     getName: function () {
//         console.log("aviral")
//     },
//     "get age": false,
//     physicalFeatures: undefined,
// }
// console.log(student.physicalFeatures.hairColor)//it will create bug now

// to overcome from this bug just try this code
// let student = {
//     name: "aviral",
//     age: 21,
//     getName() {
//         console.log("aviral")
//     },
//     "get age": false,
//     physicalFeature: {
//         hairColor: "black"
//     },
// }

//I can write it in another way
// if (student) {
//     if (student.physicalFeature) {
//         console.log(student.physicalFeature.hairColor)
//     }
// }
//I can write it in another way using tenary operator
// student ? student.physicalFeature ? console.log(student.physicalFeature.hairColor) : null : null
//I can write it in another way
// student && student.physicalFeature && console.log(student.physicalFeature.hairColor)
//I can write it in another way
// console.log(student?.physicalFeature?.hairColor)

// important interview question: pass by value and pass by reference
//pass by value
// let str1 = "aviral"
// let str2 = str1;
// console.log(str1)
// console.log(str2)

//
// let str1 = "aviral"
// let str2 = str1;

// console.log('1.', str1)
// console.log('2.', str2)

// str1 = ""

// console.log('3.', str1)
// console.log('4.', str2)

//
// let obj1 = {
//     name: "surbhi"
// }

// let obj2 = obj1;

// console.log('1.', obj1)
// console.log('2.', obj2)

//
//pass by value: its does not change the value
// let str1 = "aviral"

// // str1 =====> x
// // str2 ======> y
// let str2 = str1;

// console.log('1.', str1)
// console.log('2.', str2)

// str1 = ""

// console.log('3.', str1)
// console.log('4.', str2)

//
//pass by reference: I just create a object. ek bhi obj change karoge to dusri automatically dusri change ho jayegi
// obj1 ========> x <======== obj2
// let obj1 = {
//     name: "surbhi"
// }

// let obj2 = obj1;

// console.log('1.', obj1)
// console.log('2.', obj2)

// // obj1.name = "nilesh"

// obj1 = {
//     name: "nilesh"
// }

// console.log('3', obj1)
// console.log('4', obj2)

// Lecture: 8November 2022--------------------------------
//
// return{
//     eamil: _email,
//     password: _password
// }

//
// let obj1 = {
//     name: "jeel",
//     age: 80,
//     hairColor: "blue"
// }

// //Object.assign
// let newObject = Object.assign({}, obj1)
// console.log(newObject)

//
// let obj1 = {
//     name: "jeel",
//     age: 80,
//     hairColor: "blue"
// }

// // let newObj = obj1;
// //Object.assign:agar koi value ko edit kar rahe ha to ye naye value ko effect nhi karta ha
// let newObject = Object.assign({}, obj1)

// obj1.hairColor = "red"
// console.log(obj1)
// console.log(newObject)

//
// let obj1 = {
//     name: "jeel",
// }

// let obj2 = {
//     age: 80,
//     hairColor: "blue"
// }
// // let newObj = obj1;
// let newObject = Object.assign({}, obj1, obj2, { hasGirlfriend: false })

// obj1.hairColor = "red"
// console.log(obj1)
// console.log(newObject)

//
// let obj1 = {
//     name: "jeel",
// }

// let obj2 = {
//     name: "Alam",
//     age: 80,
//     hairColor: "blue"
// }
// let newObj = obj1;
// let newObject = Object.assign({}, obj1, obj2, { hasGirlfriend: false })
// let newObject = Object.assign({}, obj2, obj1, { hasGirlfriend: false })
//Object.assign(target, ...sources)

// obj1.hairColor = "red"
// console.log(obj1)
// console.log(newObject)

//We canwrite above code in a smaller way
// spread syntax
// let newObject = { ...obj1, ...obj2 }
// let newObject = { ...obj1, ...obj2, hasGirlfriend: false, hasCar: "tesla" }

// console.log(newObject)

//
// let obj2 = obj1;
// let obj2 = {
//     name: "Jeel"
//     .
//     .
// }

//
//this is constant so its show error
// const worldCup = {
//     matches: 41,
//     venue: "Australia"
// }

// worldCup = {
//     matches: 0,
//     venue: "SA"
// }

//
// variavlr was made at x location
// let obj1 =

// this variable was made at y location
// let num = 456

// var worldCup = {
//     matches: 41,
//     venue: "Australia",
//     squad: {
//         teamA: ["India", "Pakistan", "Netherland"],
//         teamB: ["Australia", "England", "Namibia"]
//     }
// }

// Object.freeze(worldCup)
// Object.freeze(worldCup.squad)//object ke ander object ko freeze karna padega tab hoga warna srif upar ka level hi hoga

// worldCup.squad.teamA = ["India", "Pakistan", "Bangladesh"]
// console.log(worldCup)

//ARRAYYYYYYYYYYYYYYYYYYYYYYSSSSSSS
// let arr = [1, 2, 3];
// console.log(typeof (arr))

//
// let obj = {
//     name: "tausheef",
//     age: 99
// }
// console.log(Object.keys(obj).length)//for object length

// let arr = [1, 2, 3, 3, 54, "Tausheef", false];

// console.log(arr.length)//for array length
// console.log(arr[2])

//
// let obj = {
//     name: "tausheef",
//     age: 99
// }
//to delete object--------
// delete obj.name
// console.log(obj)

// obj.school = "TPPS"
// delete obj.name
// console.log(obj)
// console.log(Object.keys(obj).length)

// let arr = [1, 2, 3, 3, 54, "Tausheef", false];

// console.log(arr[2])
// let arr1 = arr;

// arr[0] = "Aakash"
//
// console.log(arr1)

// arr[6] = "Shivani"//not correct way to do it bs its changes array length
// arr[7] = "Shivani"
// arr.push("Shivani")
// arr.push("Shivani")
// arr.pop()
// arr.pop()
// arr.pop()

// delete arr[4];//but its length will not change in interview asked
// console.log(arr[04])//undefined
// console.log(arr)

//SEE IT YOURSELF
//shift
//unshift

//splice ====> can do everything. insert, remove or replace
// splice returns the array of removed elements
//arr.splice(index, number of elemets, ...extra elents)
// var fruits = ["apple", "banana", "grapes", "mango", "litchi"]
// fruits.splice(1, 1)
// fruits.splice(1, 3)
// fruits.splice(0, 6)
// console.log(fruits)
// console.log(fruits.length)

//
// var arr = ["India", "England", "Australia", "Ireland"];
// var result = arr.splice(1, 0, "Pakistan", "Netherland");
// var result = arr.splice(3, 0, "Pakistan", "Netherland");
// console.log(result);
// console.log(arr);

//
// var fruits = ["apple", "banana", "grapes", "mango", "litchi"]
// fruits.splice(1, 3, "papaya", "kiwi")//i se 3 elements delete hua
// fruits.splice(5, 0, "papaya", "kiwi")
// fruits.splice(0, 0, "papaya", "kiwi")
// console.log(fruits)
// console.log(fruits.length)

//
// let newFruits = ["papaya", "kiwi"]
// var fruits = ["apple", "banana", "grapes", "mango", "litchi"]
// fruits.splice(0, 0, ...newFruits)
// fruits.splice(-1, 0, ...newFruits)
// console.log(fruits)
// console.log(fruits.length)

//
// let newFruits = ["papaya", "kiwi"]
// var fruits = ["apple", "banana", "grapes", "mango", "litchi"]

// var result = fruits.splice(0, 0, ...newFruits)
// console.log(result)
// console.log(fruits)
// console.log(fruits.length)

//Lecture: 9November 2022---------------------------------
//slice
// var arr = [1, 52, 76, 89]
// var result1 = arr.slice(0, 2)
// console.log(result1);
// console.log(arr);

//for loop
// var arr = [11, 22, 33, 44, 55, 66, 77]
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i] * 2;
//     result.push[num];
// }
// console.log(result);

//
// var arr = [11, 22, 33, 44, 55, 66, 77]
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i)
// }
// console.log(result);

//MAP
// arr.map(function (e, i) {
//     console.log(e, i)
// })

//
// function mapFn(element, index) {
//     console.log(element, index)
// }
// arr.map(mapFn);

//
// let result1 = arr.map(function (element, index) {
//     return element * 2
// })
// console.log(arr)
// console.log(result1)

//
// let result1 = arr.map(function (element, index) {
//     if (element % 2 === 0) {
//         return element * 2
//     } else {
//         return element
//     }
// })

// // [11, 44, 3]
// console.log(arr)
// console.log(result1)

//Arrow Function
//arr.map((element,index)=>console.log(element, index))

//filter:Interview question write your own filter function
// let result2 = arr.filter(function (element, index) {
//     return element % 2 === 0
// })
// console.log(result2)

//
// let result2 = arr.filter(function (element, index) {
//     if (element % 2 === 0) {
//         return element
//     } else {
//         return null
//     }
// })
// console.log(result2)

//Arrow Function
// console.log(arr.filter((element,index) => element%2 === 0))

// console.log(result2)

// function getName(_sameer) {
//     return (_sameer*2)
// }

// let result3 = []

// for(let i=0; i<5; i++) {
//     var num = getName(i)
//     result3.push(num)
// }

// console.log(result3)

//
//Reverse in array
// let arr = ["aviral", "Shivani", "Sarang", "Sameer"]
// let arr1 = [999, 334, 1, 234, 54, 12]

// var result = arr.reverse()
// var result = arr1.reverse()
// console.log(result)

//SORTING IN JS
// let arr = [15, 27, 34, 69, 11, 22, 7]
// var result = arr.sort(function (x, y) {
//     console.log(x, y)
//     return x - y;
// }) //nlonN
// var result = arr.sort((x, y) => y - x) //nlonN
// console.log(result)

//
// let arr = [15, 27, 34, 69, 11, 22, 7]
// var result = arr.sort(function (a, b) {
//     return b - a
// }) //nlonN
// var result = arr.sort((x, y) => y - x) //nlonN
// console.log(result)

//
// let arr2 = ["aviral", "Shivani", "Sarang", "Sameer"]
// var result = arr.sort() //nlonN

// Array, objects

//
// var saying = "early to bed, early to rise"

// console.log(saying.split(" "))
// console.log(saying.split(""))

//Lecture 10November 2022-----------------------------------
// ==========Interview questions============================

//I have a string
//write a function to reverse that string????

//string
//arrays in js are called as iterables

// function reverse(s) {
//     //write your code here
//     let s1 = ""

//     for (let i = s.length - 1; i >= 0; i--) {
//         s1 = s1 + s[i]
//     }

//     console.log(s1)
//     console.log(s1.length)
// }
// reverse("Tauseef") // feesuat

//
// function reverse(s) {
//write your code here
// let s1 = ""

// for (let i = s.length - 1; i >= 0; i--) {
//     s1 = s1 + s[i]
// }

// console.log(s1)
// console.log(s1.length)
// console.log(s.reverse())//s.reverse is not a function at reverse
// console.log(s.split(""))//split the string and convert string to array
// console.log(s.split("").reverse())//reveres the string
// console.log(s.split("").reverse().join(""))//array to string
// console.log(s.split("").reverse().join("/"))
// }
// console.dir([].reverse())
// console.dir("asdas")
// reverse("Tauseef")

//
//Check Anagrams
//dog god
// act tac

//I can do below problem from this method:
// 1)first I split string in array
// check it in console
// "ram".split("")//its convert string in array and then i will sort it and after that I will join it in string
// "ram".split("").sort()
// "ram".split("").sort().join("")

//
// function checkAnagrams(s1, s2) {
//     //write code here
//     // if (s1.length != s2.length) return false //this line of code is not required
//     if (s1.split("").sort().join("") === s2.split("").sort().join("")) {
//         console.log("Anagram")
//     } else {
//         console.log("not Anagram")
//     }

// }

// checkAnagrams("dig", "igdqwertyuio")
// checkAnagrams("actt", "ttac")
// checkAnagrams("actor", "tractor")

//
// console.log(typeof ([2, 3, 5, "2312", 1]))
// console.log(typeof (2, 3, 12))
// console.log(typeof ("2312"))

//
// let x = {}//false
// let x = []//true
// let x = [2, 3, 5, "2312", 1]//true
// console.log(Array.isArray(x))

//
// //flaaten an array
// let arr = [1, 2, 3, [4, 5], [8, 9], 10, 11]
// console.log(arr.flat())

//
//Just try yourself
// let arr = [1, 2, 3, [4, 5,[6, 7,[234,324]]], [8, 9], 10, 11]
// console.log(Array.isArray(arr)) retutn false
// result = []

//=================End Interviews Questions=============//

// for,map,
//forEach, for in, for of

//
// let arr1 = ["A", "D", "C", "Z"]
// let result = arr1.map(function (elem) {//In map its keep my original array as it is and return new array
//     return elem + "X"
// })
// console.log(result)
// console.log(arr1)

// let arr2 = ["A", "D", "C", "Z"]
// let result1 = arr2.forEach(function (elem) {// In forEach its does not change any array and not return new array . In map it just itterate each and every element and return me
//     return elem + "X"
// })
// console.log(result1)
// console.log(arr2)

//
// let arr1 = ["A", "D", "C", "Z"]
// let result = arr1.map(function (elem) {
//     return elem + "X"
// })
// console.log(result)
// console.log(arr1)

// let arr2 = ["A", "D", "C", "Z"]
// let result2 = []
// let result1 = arr2.forEach(function (elem) {
//     result2.push(elem + "X")
// })

// console.log(result2)
// console.log(result1)
// console.log(arr2)

//
//for In: return index
//for Of: return index element
// let arr2 = ["A", "D", "C", "Z"]
// for (let alpha in arr2) {
//     console.log(alpha)
//     console.log(arr2[alpha])
// }

// for (let alpha of arr2) {
//     console.log(alpha)
// }

//
//array bascically a object
// var arr2 = ["A", "D", "C", "Z"]
// arr2.name = "aviral"
// console.log(arr2)

//??
//
// let obj = {}
// obj.name = "aviral"
// obj.age = 80

// console.log(obj)

// var arr2 = ["A", "D", "C", "Z"]
// arr2[3] = "X"
// arr2.name = "aviral"

// arr2.age = 80
// arr2[10] = 100
// // arr2[6] = 100
// arr2.push("Y")
// console.log(arr2)
// console.log(arr2.length)

//Ideal use: For In for Objects
// for (let alpha in arr2) {
//     console.log(alpha)
//     console.log(arr2[alpha])
// }

//Ideal use: For Of for Arrays
// for (let alpha of arr2) {
//     console.log(alpha)
// }

// https://thecodebarbarian.com/:read article for loop

//Functions Recap

//function expressions
//function decalrations
//hoisting
//scopes
//iife- annonyomous
// (function () {
//     console.log("Noor Alam")
// }())
//js as first class

//
// function sum(s1) {//here s1 is a parameter
//     console.log(s1)
// }
// sum(30)//here 30 is  argument

//
// function sum(s1, s2) {
//     console.log(s1, s2)
// }
// sum(30)

//
// function sum(s1, s2) {
//     console.log(s1, s2)
// }
// sum(30, 40)

//
// function sum(s1, s2, s3, s4, s5) {
//     if (!s1) s1 = 10;
//     if (!s2) s2 = 20;
//     if (!s3) s2 = 30;
//     console.log(s1, s2, s3, s4, s5)
// }
// sum()

//
// function sum(s1, s2, s3) {
//     if (!s1) s1 = 10;
//     if (!s2) s2 = 20;
//     if (!s3) s2 = 30;
//     console.log(s1, s2, s3)
// }
// sum(40, 50, 60)

//
// function sum(s1 = 10, s2 = 20, s3 = 30) {
//     console.log(s1, s2, s3)
// }
// // sum(90, 150)
// sum(90, 150, null)

//
//s1 is parameter
//rest parameter
// function sum(...x) {
//     console.log(x)
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i])
//     }
// }
// sum(90, 150, 30, 20, 10)

//
// function sum(s1, s2, ...x) {
//     console.log(s1, s2)
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i])
//     }
// }
// sum(90, 150, 30, 20, 10)

//
// function sum(s1, ...arr) {
//     console.log(s1)
//     console.log(Array.isArray(arr))
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// sum(90, 150, 30, 20, 10) // 30 is argument

//----------------------------------------------------//
//Lecture 11November 2022-------------------------------

//curry function
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(5);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

// we can also do above code bu closures for function curry
//Closures
// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }
// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);
// let multiplyByThree = multiply(3);
// multiplyByThree(10);

//Arrow function
//curry function

//Anagrams???? better way
// s1 = "madam"
// s2 = "daamm"

// {
//     m: 2,
//     a: 2,
//     d: 1
// }

// function checkAnagrams(s1, s2) {
//     if (s1.length !== s2.length) return false
//     let letterCount = {};
//     for (let letter of s2) {
//         console.log(letter)
//         console.log(letterCount)
//     }
// }
// checkAnagrams("madam", "daamm")
// checkAnagrams("jacky", "tacky");

//
// function checkAnagrams(s1, s2) {
//     if (s1.length !== s2.length) return false
//     let letterCount = {};
//     for (let letter of s1) {
//         (letterCount[letter] === undefined) ? letterCount[letter] = 1 : letterCount[letter]++
//     }

//     for (let letter of s2) {
//         if (letterCount[letter] === undefined || letterCount[letter] < 1) {
//             return false
//         }
//         letterCount[letter]--
//     }
//     return true;
// }
// console.log(checkAnagrams("madam", "aadmm"));
// console.log(checkAnagrams("jacky", "tacky"));

//
// function sum(x, y, ...restOfTheValues) {
//     for (let value of restOfTheValues) {
//         console.log(value)
//     }
//     console.log(x, y)
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8)

//
// function sum(x, y, ...restOfTheValues) {
//     for (let value of restOfTheValues) {
//         console.log(value)
//     }
//     console.log(x, y)
// }
// sum(1, 2)
// sum(1, 2, 3, 4, 5, 6, 7, 8)

//
// function sum(...restOfTheValues) {
//     let total = 0;
//     for (let value of restOfTheValues) {
//         total = total + value
//     }
//     console.log(total)
// }
// sum(1, 2)
// sum(1, 2, 3, 4, 5)

//
// function sum(...restOfTheValues) {
//     let total = 0;
//     for (let i = 0; i < restOfTheValues.length; i++) {
//         total = total + restOfTheValues[i]
//     }
//     console.log(total)
// }
// sum(1, 2)
// sum(1, 2, 3, 4, 5)

//
//Curry Function: Currying is a function that takes one argument at a time and returns a new function expecting the next argument.

// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }
// let result = sum1(5)
// console.log(result)

//
//it show error
// function sum1(x) {
//     return sum2
// }
// let result = sum1(5)
// console.log(result)

//
// function sum1(x) {
//     return function name() {
//         console.log(name)
//     }
// }
// let result = sum1(5)
// console.log(result)

//
// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }
// let result = sum1(5)
// console.log(result)

//
// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }
// let result = sum1(5)
// let result1 = result(10)
// console.log(result)

//
// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }
// let result = sum2
// console.log(result)
// console.log(sum2)

// let result1 = result(10)
// console.log(result1)

//
// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }

// let result1 = sum2(10)
// console.log(result1)

//
// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }

// let result = sum1(5)
// let result1 = sum1(10)
// console.log(result1)

//
// function sum2(y) {
//     return y
// }

// function sum1(x) {
//     return sum2
// }

// let result = sum1()
// console.log(result)

// let result1 = result(10)
// console.log(result1)

//
// function x() {
//     return "aviral"
// }

// console.log(x())

//
// function x() {
//     return "aviral"
// }

// // let res = x
// let res = x()
// console.log(res)

//
// function x() {
//     return "aviral"
// }

// let res = x();
// console.log(res)

//
// function x() {
//     return function () {
//         return "Tauseef"
//     }
// }
// let res = x();
// console.log(res);

//
// function y() {
//     return "Tauseef"
// }
// function x() {
//     return y
// }

// let res = x;
// // let res = x();
// console.log(res);

//
// function y() {
//     return "Tauseef"
// }
// function x() {
//     return y
// }

// let res = x()();
// console.log(res);

//Closures:a closure gives you access to an outer function's scope from an inner function
// function x() {
//     let name = "aviral"

//     function y() {
//         console.log(name)
//         let age = 80

//     }
//     y()
// }

// x()

//
//name ka scope was only function x
//how am i getting this in the scope of function y??
//Closures are a wah javaScript uses to access outer scope variable in its inner scope
// function x() {
//     let name = "aviral"
//     function y() {
//         console.log(name)
//         let age = 80
//     }
//     console.dir(y)
//     y()
// }
// x()

//
// function x() {
//     let name = "aviral"
//     let age = "80"
//     let isInstructor = false
//     function y() {
//         console.log(name, age, isInstructor)
//     }
//     console.dir(y)
//     y()
// }
// x()

//============Lec36: 15November2022============//
// Revision closure
// scope for age variable is function x
// ab x function ke under ek aur function bana diya matlab ek aur scope bana diya i.e is y function

// function x() {
//     let name = "aviral"
//     let age = "80"
//     let isInstructor = false
//     function y() {
//         console.log(name, age, isInstructor)
//     }
//     console.dir(y)
//     y()
// }
// x()

//
//closures will not work
// function y() {
//     console.log(name, age, isInstructor)
// }
// function x() {
//     let name = "aviral"
//     let age = "80"
//     let isInstructor = false
//     console.dir(y)
//     y()
// }
// x()

//
// function x() {
//     let name = "aviral"
//     let age = "80"
//     let isInstructor = false
//     function y() {
//         function z() {
//             console.log(age)
//         }
//         console.dir(z)
//         z()
//     }
//     console.dir(y)
//     y()
// }
// x()

//
// function x() {
//     return 10;
// }
// let result = x();
// console.log(result)

//
// function x() {
//     return function y() {
//         return 10;
//     }
// }
// let result = x();
// let newResult = result()
// console.log(newResult)

//
// function x() {
//     return function y() {
//         return 10;
//     }
// }
// let result = x()();//this is called currying without using further function
// // let newResult = result()
// console.log(result)

//
// Another way of calling function in currying
// function x() {
//     return function y() {
//         return function z() {
//             return 10
//         }
//     }
// }

// let result = x()()();
// console.log(result)

//
// function sum(x) {
//     console.log(x)
// }
// sum(10)
// // sum(10)(20)
// // sum(10)(20)(30)

//
// function sum(x) {
//     return function (y) {
//         console.log(x + y)
//     }
// }
// sum(10)
// sum(10)(20)

//
//Currying function work like that
// function sum(x) {
//     return function (y) {
//         return function (z) {
//             console.log(x + y + z)
//         }
//     }
// }
// sum(10)
// sum(10)(20)
// sum(10)(20)(30)

//
//Currying function work like that
//Just check currying MDN
// function sum(x) {
//     let sum = x;
//     return function resultFn(y) {
//         if (arguments.length) {
//             sum = sum + y;
//             return resultFn
//         }
//         return sum
//     }
// }

// console.log(sum(10)())
// console.log(sum(10)(20)())
// console.log(sum(10)(20)(30)())
// console.log(sum(10)(20)(30)(11)(16)(15)())

// =============================================================
// var student1 = {
//     name: "Sarang",
//     age: 65
// }
// var student2 = {
//     name: "Sameer",
//     age: 102
// }

// var student3 = {
//     name: "Surbhi",
//     age: 70
// }

// I will not do for such  100 and multiple cases so may be I used Constructor

//
// var student1 = {
//     name: "Sarang",
//     age: 65
// }

// var student2 = { ...student1 }
// console.log(student2)//I want to copy object2 key value but copy object1

// var student2 = {
//     name: "Sameer",
//     age: 102
// }

// var student3 = {
//     name: "Surbhi",
//     age: 70
// }

//CONSTRUCTORS?????
// Normal functions and constructor are look like same in JavaScript
// function createStudentFactory(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }
// console.log(createStudentFactory("Sarang", 65))

//
//In this case it behave like function
// function createStudentFactory(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }
// console.log(createStudentFactory("Sarang", 65))
// console.log(createStudentFactory("Sameer", 70))

//
// function createStudentFactory(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }
// console.log(createStudentFactory("Sarang", 65))
// console.log(createStudentFactory("Sameer", 70))[]

//
// let obj1 = new Object()
// let arr1 = new Array()
// let str1 = new String("aviral")

// console.log(arr1)
// console.log(arr1.indexOf())

//
//I have made 3 onstructor and I can make many more
// let CreateStudentFactory = function (name, age) {
//     this.name = name
//     this.age = age
// }
// let student1 = new CreateStudentFactory("Sarang", 65)
// let student2 = new CreateStudentFactory("Noor", 23)
// let student3 = new CreateStudentFactory("Alam", 22)
// console.log(student1)
// console.log(student2)
// console.log(student3)

//
// let CreateStudentFactory = function (firstName, lastName = "", age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age

//     this.getFullName = function (x) {
//         return `${firstName} ${lastName} ${age}`
//     }
// }

// let student1 = new CreateStudentFactory("Sarang", "Salame", 65)
// let student2 = new CreateStudentFactory("Sameer", "Agarwal", 70)
// let student3 = new CreateStudentFactory("Surbhi", "Chawla", 70)
// console.log(student1.getFullName())

//for $ use or templates literals
// var a = "Sarang"
// var b = "Rahman"
// // console.log(a + ' ' + b)
// console.log(`my first name is ${2 > 3 ? a : "Sameer"} and last name is ${b}`)

//
//what is this in js??
//value of this is always an object
// console.log(this)

//
// let student = {
//     name: "aviral",
//     getName: function() {
//         console.log(this)
//     }
// }
// student.getName()

//
// let student = {
//     name: "aviral",
//     characters: {
//         color: "black",
//         age: 90,
//         favcAR: "ALTO",
//         getCharacters: function() {
//             console.log(this)
//         }
//     }
// }
// student.characters.getCharacters()

//
// let student = {
//     name: "aviral",
//     getName: function() {
//         console.log(this)
//     },
//     characters: {
//         color: "black",
//         age: 90,
//         favcAR: "ALTO",
//         getCharacters: function() {
//             console.log(this)
//         }
//     }

// }

// student.getName()
// student.characters.getCharacters()

//
//I am just mixing two concept
// let CreateStudentFactory = function (firstName, lastName = "", age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age

//     this.getFullName = function (x) {
//         return this
//     }
// }
// let student1 = new CreateStudentFactory("Sarang", "Salame", 65)
// let student2 = new CreateStudentFactory("Sameer", "Agarwal", 70)
// console.log(student1.getFullName())
// console.log(student2.getFullName())

//
//value of this is always object
// function getName() {
//     var student = {
//         name: "aviral"
//     }
//    return this//this ki value object ha so its show window
// }
// console.log(getName()) //???

//=================Lec37: 16November2022===============//
// this  === window//??

//
//function kuch value leke compute karke kuch return karta ha jabki constructor obj deta ha with certain properties and value
//function  me key value nhi ha jabki constructr me key value print karta ha

//this is normal Function
// let CreateStudentFactory = function(firstName,lastName = "", age) {
//     var firstName = firstName
//     var lastName = lastName
// return "aviral"
// }
// let student1 = CreateStudentFactory("Sarang", "Salame", 65)
// console.log(student1)

//
//I used "new" as keywords in line 2043 and now its become constructor
//functions kuch value leke usko compute karke ek naya value return karta ha jabki Constructor ek naya object deta ha with certain properties and value attached with it

// let CreateStudentFactory = function(firstName,lastName = "", age) {
//     var firstName = firstName
//     var lastName = lastName
//     this.firstName = firstName
// return "aviral"
// }
// let student1 = new CreateStudentFactory("Sarang", "Salame", 65)
// console.log(student1)

//
// let CreateStudentFactory = function(firstName,lastName = "", age) {
//     var firstName = firstName
//     var lastName = lastName
//     this.firstName = firstName
// return "aviral"
// }
// let student1 = CreateStudentFactory("Sarang", "Salame", 65)
// console.log(student1)

//
//create a very simple calculator, sum and substract
//Question ??
// let obj = {
//     value: 0
// }
// obj.add(5).value//5
// obj.substract(5).value//-5
// obj.add(5).substract(5).add(3).value//3
// obj.add(5).substract(5).add(3).substract(15).add(10).value//-2

//
//solution
// let obj = {
//     value: 0,
//     add: function(x) {
//         this.value = this.value + x
//         return this
//     },
//     substract: function(x) {
//         this.value =  this.value - x
//         return this
//     }
// }
// obj.add(5).value//5
// console.log(obj)//normal as it is function mil gaya
// console.log(obj.add(5))
// console.log(obj.add(5).value)

//
// let obj = {
//     value: 0,
//     add: function(x) {
//         this.value = this.value + x
//         return this
//     },
//     substract: function(x) {
//         this.value =  this.value - x
//         return this
//     }
// }

// console.log(obj.add(5))
// obj.add(5).value //5
// obj.add(5).substract(5).add(3).substract(15).add(10).value
// console.log( obj.add(5).substract(5).add(3).substract(15).add(10).value);

// console.log(obj.add(5));

// obj.substract(5).value //-5
// obj.add(5).substract(5).add(3).value // 3
// obj.add(5).substract(5).add(3).substract(15).add(10).value //-2
// obj.value

//
//====We have discuss all of this===
//global This
// this inside object
// this in constructor
//this inside a function===//

//console.log ki value window hoga kyoki return this ki value hamesha object hota same question baar baar sir pooch rahe ha fir bhi galat jawab de raha ho
//"this ki value hamesha window object hoti ha"
//  function car(carName) {
//     let carProps = {
//         name: carName,
//         color:"red"
//     }
//     return this
// }
// var result = car("Maruti")
// console.log(result)

//
// function car(carName) {
//     // let carProps = {//yepure function code se koi
//     //     name: carName,
//     //     color:"red",
//     //     getCarName(){
//     //         return this
//     //     }
//     // }//farak nhi padt ha

//     return this
// }
// var result = car("Maruti")
// console.log(result)//????

//
// function car(carName) {
//     let carProps = {
//         name: carName,
//         color:"red",
//         getCarName(){
//             return this
//         }
//     }

//     return carProps
// }
// var result = car("Maruti")//I call this car function and return me car walla object I have shown it through dot
// console.log(result.getCarName())//????

//
//window object ko relate karne ke three ways ha
//call, apply, bind

//This concept for call
// let carProps = {
//     name: "Nano",
//     color: "red",
//     getCarName() {
//         return this
//     }
// }

// let bikeProps = {
//     mileage: 30,
//     automatic: true
// }

// function car() {
//     return this
// }

// var result = car()
// console.log(result)//????

//
// This concept for call
//Same concept will go for apply just little difference see below code(change "call to apply" in line )
// apply same call ki tarah bs sare parammeter ek array ke under aate ha
// let carProps = {
//     name: "Nano",
//     color: "red",
//     getCarName() {
//         return this
//     }
// }

// let bikeProps = {
//     mileage: 30,
//     automatic: true
// }

// function car() {
//     return this
// }

// // var result = car.call({})//blank object
// var result = car.apply({})//blank object
// // var result1 = car.call(carProps)
// var result1 = car.apply(carProps)
// var result2 = car.call(bikeProps)
// console.log(result)//????
// console.log(result1)//????
// console.log(result2)//????

//
// let carProps = {
//         name: "Nano",
//         color: "red",
//         getCarName() {
//             return this
//         }
//     }

//     let bikeProps = {
//         mileage: 30,
//         automatic: true
//     }

//     function car(name,age) {
//         console.log(name,age)
//         return this
//     }

//     // var result1 = car("maruti", 30)//I just execute 2244 line
//     // var result1 = car.call("maruti", 30)
//     // var result = car.call(bikeProps, "maruti", 30)
//     // var result = car.call(carProps, "maruti", 30)
//     var result = car.apply(carProps, ["maruti", 30])//apply same call ki tarah bs sare parammeter ek array ke under aate ha
//     //call se bs ye diffrence aaya ha abhi  yaha pe this ki value(2246) window rehti aur jab maine line 2249 me "car.call " jab likha to the first parameter will you pass become the value of this line(2246) (bikeprops to this) baki  iske sare parameters (line 2251: maruti, 30  line 2244 ke parameter ho jayenge)
//     // var result = car.call(bikeProps, "maruti", 30)
//     console.log(result)//?????

//
// let carProps = {
//     name: "Nano",
//     color: "red",
//     getCarName() {
//         return this
//     }
// }
// carProps.getCarName()

// let bikeProps = {
//     mileage: 30,
//     automatic: true
// }

// function car(name, age) {
//     console.log(name,age)
//     return this
// }

// var result1 = car("maruti", 30)
// var result = car.call(carProps, "maruti", 30)
// var result =  car( "maruti", 30)
// var result = car.apply(carProps, ["maruti", 30])

///////////////////BIND/////////////
// let carProps = {
//     name: "Nano",
//     color: "red",
//     getCarName() {
//         return this
//     }
// }
// carProps.getCarName()

// let bikeProps = {
//     mileage: 30,
//     automatic: true
// }
// function car(name, age) {
//     console.log(name, age)
//     return this
// }
// var newCarFn = car.bind(bikeProps)
// // console.log(newCarFn)
// //100 lines of code
// newCarFn("nano", 80)
// console.log(newCarFn("nano", 80))
// console.log(result) //????

//
// console.log(car.call(bikeProps, "x", 30))

// console.log(newCarFunction("x", 30))
// console.log(newCarFn)
//100 lines of code
// car.bind(carProps)("nano", 83789)
// console.log(newCarFn("nano", 83789))
// console.log(result) //?
// console.log(newCarFunction("x", 30))
// console.log(newCarFunction("x", 30))
// console.log(newCarFunction("x", 30))

// let obj1 = {
//     name: "aviral"
// }

// function x() {
//     // return this
//     function y() {
//         return this
//     }
//     y.call(obj1)
// }

// var newX = x.bind(obj1)

// console.log(x()) //?

//arrow fucnction ??

// function getSum(x,y) {

//     if(!x) {
//         x = 0
//     }
//     if(!y) {
//         y = 0
//     }

//     return x+y
// }

// console.log(getSum(5, 3))

// var getNameArrow = () => {

//     if(!x) {
//         x = 0
//     }
//     if(!y) {
//         y = 0
//     }

//     return x+y
// }

// getNameArrow()
