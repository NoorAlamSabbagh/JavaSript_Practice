// //singleton
// const JsUser = {
//     name: "Hitesh",
//     age:18,
//     location: "jaipur",
//     email: "alamrangrej787@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// const course = {
//     coursename: "JS in Hindi",
//     price: "999",
//     courseInstructor: "NoorAlam"
// }

// const {courseInstructor: instructor} = course
// console.log(instructor)

//
// function calculateCartPrice(...num1){
// return num1
// }
// console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9))

// const User = {
//   username: "hitesh",
//   price: 199,
// };
// function handleObject(anyObject) {
//   console.log(
//     `Username is ${anyObject.username} andw price is ${anyObject.price}`
//   );
// }
// // handleObject(User)
// handleObject({
//   username: "hitesh",
//   price: 199,
// });


const myNewArray = [200, 400, 500, 900]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 900]))