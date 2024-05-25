//* --------------------------------------------------------
//* Programming Questions: Count occurence of characteInterview Questionss
//* --------------------------------------------------------

//Q1: Write a function called checkTriangleType that takes three parameters representing the length
// of side of the triangle. The function should return a string indicating the type of triangle:
//: "equilateral", "isosceles", or "scalene"

const checkTriangleType = (a, b, c) => {
    if(a===b && b===c) return "equilateral trianlgle"   
    if (a === b || b === c || c === a) return "issosceles trianlgle"   
    return "scalene triangle"   
}
console.log(checkTriangleType(3, 3, 3)); //Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); //Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); //Output: "scalene"

//* todo the functions sgould adhere to the following rules:
//? If all the three sides are equal length return equilateral
//? If omly two sides are equal length return isosceles
//? If all the three sides are different length return scalene
