let greetings: string = "Hello, World!";

let myNum = 6
greetings.toLowerCase();
console.log(greetings); // Output: Hello, World!

///
// number is for numbers like 42. JavaScript does not have a special runtime value for integers,
//  so there’s no equivalent to int or float - everything is simply number
let userId: number = 334455;
userId// userId is a number

//boolean
let isLoggedIn: boolean = false; // true or false


//any
//using any is not recommended, but it is useful in some cases
// any is a special type that allows you to assign any value to a variable. It’s like saying “I don’t care what type this is”.
// It’s useful when you don’t know the type of a variable in advance or when you want to opt-out of type checking for a specific variable.
// However, using any defeats the purpose of TypeScript’s type system, so it should be used sparingly.

let hero;
function getHero() {
  return "Thor";
}
hero = getHero(); // hero is of type any



export {}
