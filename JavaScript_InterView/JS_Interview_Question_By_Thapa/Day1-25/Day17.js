// (17)  Write a function to convert a string to camelCase and snakeCase
const toCamelCase = (str) => {
    // Method (1)
    // str = str.trim().split(" ");
    // console.log("strjjj", str);//Output: hello world thApa
    // str = str.map((curElem, index) => {
    //     if (index === 0) {
    //         return curElem.toLowerCase();
    //     } else {
    //         return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase()
    //     }
    // })
    // return str.join("");

    // Method (2)
    return str
    .trim()
    .split(" ")
    .map((curElem, index) => {
        if (index === 0) {
            return curElem.toLowerCase();
        } else {
            return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase()
        }
    })
    .join("");
}

console.log(toCamelCase("hello world thApa"));//Output: helloWorld