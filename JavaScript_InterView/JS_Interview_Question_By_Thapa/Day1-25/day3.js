//* --------------------------------------------------------
//* Programming Questions: Count Occurence of characters
//* --------------------------------------------------------

//Q1: Write a function called countChar that takes two parameters: a string  and a character to count.
// the function should return the number of times the specified character 
// appears in the string
const countChar = (word, char) => {
  word = word.toLowerCase();
  char = char.toLowerCase();
  // totalCount = word.split("");
  // console.log(totalCount)//
  //Output:
  // [
  //   'm', 'i', 's', 's',
  //   'i', 's', 's', 'i',
  //   'p', 'p', 'i'
  // ]
  totalCount = word.split("").reduce((accum, currEle) => {
    if (currEle === char) {
      accum++;
    }
    return accum;
  }, 0);
  //   console.log(totalCount)
  return totalCount;
}

console.log(countChar("MissIssippi", "I")); //Output : 4

//* todo Constraints:
//? the function should be case-sensitive
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function show)

//* Note:
//? If the input string is empty or contains only whitespace, the function should return as false.
//? The function should ignore leading and trailing whitespace when determinig the longest word.