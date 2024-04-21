//Episode 2 - Use Cases

//1 check if user with such name Exits
//2 Adding element to the Array
//3 Remove Duplicate element int the Array
//4 Concatinating the Array

//Kya Seekha....  Set Object, Includes(), some(), reduce(), find(), findIndex(), concat()

const users = [
  {
    id: 1,
    name: "Noor Alam",
    age: "25",
    role: "Full Stack Web Developer",
    isActive: true,
  },
  {
    id: 2,
    name: "Nehal",
    age: "26",
    role: "Developer",
    isActive: true,
  },
  {
    id: 3,
    name: "Rajesh",
    age: "27",
    role: "Frontend Developer",
    isActive: false,
  },
  {
    id: 4,
    name: "Faisal;",
    age: "29",
    role: "ReactDeveloper",
    isActive: false,
  },
  {
    id: 5,
    name: "Sovichk",
    age: "24",
    role: "Backend Developer",
    isActive: false,
  },
];

//
//1)> Check if the user with such name exits
//Level 0
// const isNameExit = (name, users) => {
//   let exist = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exist = true;
//     }
//   }
//   return exist;
// };


//Level 2
// const isNameExit = (name, users)=>{
//    const user = users.find((user)=>user.name===name)
//     // return user
//     return Boolean(user);
// }

//Level 3
// const isNameExit = (name, users)=>{
//    const index = users.findIndex((user)=>user.name===name)
//     // return user
//     return index>=0;
// }

//Level 4
// const isNameExit = (name, users)=>{
//    const user = users.some((user)=>user.name===name)
//     return user;
// }



//2)>-- Adding Element to the Array
// const arr = [1, 2, 3];
// const append = (arr, ele)=>{
// arr.push(ele);
// return arr;
// }
// // console.log(append(arr, 4));
// const newArray = append(arr,4);
// console.log(newArray);
// console.log(arr);
//
// const append=(arr, ele)=>{
//     return [...arr, ele]
// }
// console.log(append(arr, 5))



// 3 Remove Duplicates Element in the Array
//The Set object is a built-in JavaScript data structure that allows you to store unique value of any tyep
//the spread operators is used to expand the array into individual arguments
//the includes method is used to check if it already exits in the uniqueElements array.

//Level 1
// const arr = [1,1,2,3,3,4,4,5]
// function uniqueArray(){
//     const uniqueElements = [];
//     arr.forEach((ele)=>{
//         if(!uniqueElements.includes (ele)){
//             uniqueElements.push(ele)
//         }
//     })
//     return uniqueElements;
// }
// console.log(uniqueArray(arr));


//Level 2
// const arr = [1,1,2,2,3,4];
// const uniqueArray = (arr) => {
// return [...new Set(arr)]
// }
// console.log(uniqueArray(arr));
// console.log(arr)

//Level 3
// const arr = [1,1,2,2,3,4];
// const uniqueArray = (arr) => {
//   return arr.reduce((acc, ele)=>{
//     return acc.includes(ele)? acc : [...acc, ele]
//   },[])
// }
// console.log(uniqueArray(arr));


//4)>-- Concatinating the Array
const mergeArray = (arr1, arr2) => {
return arr1.concat(...arr2);
}
const arr1 = [1];
const arr2 = [1, 2, 3];
const result = mergeArray(arr1, arr2);
console.log(result);






























