// const username= {
//   user:"Alam",
//   price: 2000,

//    WelcomeMessage: function() {
//     console.log(`${this.user} , Welcome to the website`)
//     console.log(this)
//    }
// }
// username.WelcomeMessage()
// username.user="Noor"
// username.WelcomeMessage()
// console.log(this)

//
// function chai(){
//     let username="hitesh"
//     console.log(username)
// }
// chai()

//
// const chai = function(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

//
// const chai = ()=> {
//     let username="hitesh"
//     // console.log(this.username)
//     console.log(username)
//     console.log(this)
// }
// chai()

//
// const addTwo = (one, two) =>{
//     return one + two
// }
// console.log(addTwo(2, 5))

//
// const addTwo = (one, two) =>(one + two)
// console.log(addTwo(2, 5))
//
const addTwo = (num1, num2) => ({username: "Noor Alam"})
console.log(addTwo())
