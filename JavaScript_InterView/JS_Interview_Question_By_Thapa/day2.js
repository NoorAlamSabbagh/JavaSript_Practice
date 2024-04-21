//* --------------------------------------------------------
//* Programming Questions: Hash Tag Generator
//* --------------------------------------------------------

//Q1: You are required to implement a function generateHash that generate a hash tag from a given input String.
//The hash should construct as follows:
//The input string should be converted to a hash tag format, where each word is capatilized and concatenated
// together without spaces

//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespaces
//the function should return false.
//* ? Otherwise, the function should return the generated hash tag prefixed with #.

//* Write a function generateHash to accomplish this task.
const generateHash = (str) => {
if(str.length > 280 || str.trim === 0){
    return false;
}
str = str.split(" ");
// console.log(str[1].toUpperCase());
// str = str.map((currEle) => console.log(currEle[0]))
str = str.map((currEle) => 
// (1)Method
// currEle.replace(currEle[0], currEle[0].toUpperCase())
// (2)Method
currEle.charAt(0).toUpperCase() + currEle.slice(1)
)
// console.log(str);
str = `#${str.join("")}`;
console.log(str);
return str;
}

console.log(generateHash("my name is thapa technical"));
//o/p * "#myNameIsThapaTechnical"