//Write a function to determine whether a given string is a pallindrome or not

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    // console.log("jjjjjj", str);//Output: amanaplanacanalpanama
    let r_str = str.split("").reverse().join("");
    // console.log("r_str", r_str);//Output: amanaplanacanalpanama
    return str === r_str ? true : false;
}


console.log(isPalindrome("A man, a plan, a canal, Panama")); //Output: true
// console.log(isPalindrome("racecar")); //Output: true
// console.log(isPalindrome("madam")); //Output: true
// console.log(isPalindrome("hello")); //Output: false