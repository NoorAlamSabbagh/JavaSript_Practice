"use strict";
// console.log("My name is alam");
// Removed duplicate declaration of num
// num = "vinod"
//
// console.log("My name is alam");
// let num = 5;
// // num = "vinod"
// num = 55;
// <==============Lecture 3 ==============>
//TODO 1: Write a program to add two numbers?
//TODO 2: How to catch Erros and solve it.
//TODO3: TS configuration file
//
// function sum(a, b){
//     return a+b
// }
// console.log(sum(5, 19));
//
// function sum2(a:number, b:number):number{
//     return a+b
// }
// // console.log(sum(5, "alam"));
// console.log(sum2(5, 10));
//tsc --int
//tsc --noEmitOnError index.ts
// <==============Lecture 4 ==============>
// let myFavNum : number = 10;
// let myFullName: String = "Vinod Bahadur thapa";
// console.log(myFavNum.toString);
// let myFavNum:number = 5;
// let myAge:number = 29
// let pi:number = 3.147;
// let myNegVal:number = -5
// let invalidResult: number = myAge + "years"
// console.log("invalidResult", invalidResult)
// <==============Lecture 5 ==============>
// function isEven(a:number) : boolean{
//     return a%4===0 && a%8===0;
// }
// console.log(isEven(16))
// <==============Lecture 7 ==============>
// <==============Lecture 8 ==============>
// function greet(name: string, id: number){
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }
// greet("Alam", 1)
//
// const great = (name: string, id: number) =>{
//     console.log(`Welcome, ${name} and your id is ${id}`);
// }
// great("Alam", 1)
//
// const great = (name: string, id: number): string =>{
//     return `Welcome, ${name} and your id is ${id}`
// }
// great("Alam", 1)
//
// const great = (name: string, id: number): string => {
//     return `Welcome, ${name} and your id is ${id}`;
// };
// console.log(great("Alam", 1));
//
const isPalindrome = (palin) => {
    let myPlain = palin.split('').reverse();
    return myPlain.join('') === palin;
};
console.log(isPalindrome('12321'));
