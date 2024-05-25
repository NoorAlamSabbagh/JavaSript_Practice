//(19)Write a function to check if the given string starts with a specifc subsString.

const startsWith = (str, substr ) =>{
    //Method (1)
// return str.toLowerCase().startsWith(substr.toLowerCase());
// return str.slice(0, substr.length) === substr;
return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
}
console.log(startsWith("Hello world", "hello"));//Output: true
console.log(startsWith("Hello world", "world"));//Output: false
 
