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

// const findLongestWord = (str) => {
// // Method 1:
// //    if(str.trim().length === 0){
// //     return false;
// //    }
// //    words = str.split(" ")
// //    words = words.sort((a,b) => b.length - a.length);
// //    console.log(words)
// //    //Output
// // //    [
// // //     'JavaScriptkjgjkv',
// // //     'Technical',
// // //     'Youtube',
// // //     'course',
// // //     'watch',
// // //     'Alam',
// // //     'on'
// // //   ]
// //    return words[0];//JavaScriptkjgjkv
// //    return words.at(-1);//on

// //Method 2:
//     if (str.trim().length === 0) {
//         return false;
//     }
//     words = str.split(" ")
//     return words.reduce((accuWord, currWord) => (currWord.length > accuWord.length ? currWord : accuWord)
//     );
// }
// console.log(findLongestWord("watch Alam Technical JavaScriptkjgjkv course on Youtube"))



//Practice
// const findLongestWord = (str) => {
//     let trimFunction = str.trim().split(" ");
//     trimFunction = trimFunction.sort((a,b) => b.length - a.length);
//     console.log("trimFunction", trimFunction)
//     return trimFunction.at(1);//Technical
//     return trimFunction.at(-1);//on
// }

//
// const findLongestWord = (str) => {
//     if(str.trim().length === 0){
//         return false;
//     }
//     // words = str.split();
//     // console.log("words",words) //words [ 'watch Alam Technical JavaScriptkjgjkv course on Youtube' ]
//     words = str.split(" ");
//     console.log("words((  ))",words) //Output words((  )) [  'watch',
// //     'Alam',
// //     'Technical',
// //     'JavaScriptkjgjkv',
// //     'course',
// //     'on',
// //     'Youtube'
// //   ]
       
//    return words.reduce((accuWord, currWord) => (currWord.length > accuWord.length ? currWord : accuWord), "")
// }
// console.log(findLongestWord("watch Alam Technical JavaScriptkjgjkv course on Youtube"));//Output: JavaScriptkjgjkv



///////////////////////////////////////
function findLongestWord(sentence) {
    let longestWord = ""; // Initialize variable to store the longest word
    let currentWord = ""; // Initialize variable to build each word
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      
      // If the character is not a space, add it to the current word
      if (char !== " ") {
        currentWord += char;
      } else {
        // If a space is encountered, check the length of the current word
        if (currentWord.length > longestWord.length) {
          longestWord = currentWord; // Update the longest word
        }
        currentWord = ""; // Reset current word
      }
    }
    
    // Final check for the last word in the string
    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }
    
    return longestWord;
  }
  
  // Test the function
  console.log(findLongestWord("watch Alam Technical JavaScriptkjgjkv course on Youtube")); // Output: "JavaScriptkjgjkv"
  
