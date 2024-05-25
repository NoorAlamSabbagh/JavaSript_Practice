//(18)

const isUpperCase = (char) => {
    //Method 1
    // if(char.charCodeAt(0) >= 65 && char.charCodeAt(0)<= 90){
    //     return true;
    // }
    // return false;

    //Method 2
    return char === char.toUpperCase();
}
console.log(isUpperCase("a"));//Output: true
// console.log(isLowerCase("s"));//Output: false