//* --------------------------------------------------------
//* Programming Questions: Longest word in a String
//* --------------------------------------------------------

//Q1: Write a function findLongestWord that takes a string as input and returns the longest word in the string.
// If there are multiple longest, return the first one encountered.


//* Constraints:
//? The input string may contain alphabetic characters, digits, space and punctuations
//? The input string is non-empty.
//? The input string may contain multipe word seperated by space

//* Note:
//? If the input string is empty or contains only whitespace, the function should return as false.
//? The function should ignore leading and trailing whitespace when determinig the longest word.

const findLongestWord = (str) => {
// Method 1:
//    if(str.trim().length === 0){
//     return false;
//    }
//    words = str.split(" ")
//    words = words.sort((a,b) => b.length - a.length);
//    return words.at(-1);
//    return words[0];
//    console.log(words)

//Method 2:
    if (str.trim().length === 0) {
        return false;
    }
    words = str.split(" ")
    return words.reduce((accuWord, currWord) => (currWord.length > accuWord.length ? currWord : accuWord), ""
    );
}

console.log(findLongestWord("watch Alam Technical JavaScriptkjgjkv course on Youtube"))