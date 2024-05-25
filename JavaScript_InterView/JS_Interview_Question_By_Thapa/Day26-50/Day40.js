//Day40: GenerateBarChart

// const generateBarChart = (arr) => {
//     const newArr = arr.map((currelem, index) => {
//         // console.log(`${index + 1}: ${currelem + "*"} `);
//         let star = "";
//         let number = 0;
//         while (number < currelem) {
//         star = star + "*";
//         number++;
//         }
//         return  `${index + 1}: ${star}`;
//     })
//     console.log(newArr.join("\n"))
// }
// console.log("Day40", generateBarChart([5, 3, 9, 2]));

//
//Method 2
const generateBarChart = (arr) => {
    return  arr.map((currelem, index) => {
        return `${index +1}: ${"*".repeat(currelem)}`
    })
.join("\n");
}
console.log("Day40", generateBarChart([5, 3, 9, 2]));