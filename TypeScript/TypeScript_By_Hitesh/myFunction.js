"use strict";
// function addTwo(num){
//     num.toUpperCase(); // This will throw an error if num is not a string
//     return num + 2;
// }
// addTwo(3); // 5
Object.defineProperty(exports, "__esModule", { value: true });
//
// function addTwo(num: number){
//     return num + 2;
// }
// addTwo(3); // 5
//
// function getUpper(val: string) {
//     return val.toUpperCase();
// }
// getUpper("hello");
//
// function signUpUser(name: string, email: string, isPaid: boolean) {
//     // Perform sign-up logic here
//     console.log(`Name: ${name}, Email: ${email}, Is Paid: ${isPaid}`);
// }
// signUpUser("Noor", "noor@gmail.com", false); // This will throw an error because the types do not match
//
// let loginUser = (name: string, email: string, isPaid: boolean = false) => {
// }
// loginUser("h", "h@h.com")
//
// function addTwo(num: number): number {
//     return num + 2;
//     // return "hello";
// }
// addTwo(3); // 5
//
// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK";
// }
//
// const getHelllo = (s: string): string => {
//     return "";
// }
//
var heros = ["thor", "spiderman", "ironman"];
// const heros = ["1", "2", "3"];
var herosMessage = heros.forEach(function (hero) {
    console.log("hero is ".concat(hero));
});
//  heros.map(hero=>{
//     return `hero is ${hero}`
// })
console.log(herosMessage);
