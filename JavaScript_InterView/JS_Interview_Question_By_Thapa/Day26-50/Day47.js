//Day47: ExactNumbers

const extractNumbers = (str) => {
let regex = /\d+/g;
return str.match(regex);
}

console.log(extractNumbers("abc123def456"));//Expected Output: ["123", "456"]
console.log(extractNumbers("no numbers here"));//Expected Output: null
console.log(extractNumbers("1a2b3c4d"));//Expected Output: ["1", "2", "3", "4"]
console.log(extractNumbers("100, 200 and 300"));//Expected Output: ["100", "200", "300"]
console.log(extractNumbers(""));//Expected Output: null