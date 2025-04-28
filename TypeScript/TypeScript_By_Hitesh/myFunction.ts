// function addTwo(num){
//     num.toUpperCase(); // This will throw an error if num is not a string
//     return num + 2;
// }
// addTwo(3); // 5


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
// const heros = ["thor", "spiderman", "ironman"];
// // const heros = ["1", "2", "3"];

// const herosMessage = heros.forEach((hero) => {
//     console.log(`hero is ${hero}`);
//   });
// //  const herosMessage = heros.map(hero=>{
// //     return `hero is ${hero}`
// // })
// console.log(herosMessage);


//
// function consoleLogError(errMsg: string): void{
//     console.log(errMsg);
// }

// //
// The never type represents values which are never observed. In a return type, 
// this means that the function throws an exception or terminates execution of the program.
// never also appears when TypeScript determines there’s nothing left in a union.
// function handleError(errMsg: string): never{
//     throw new Error(errMsg);
// }

export {}