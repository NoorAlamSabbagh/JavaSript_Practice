// function alam(){
//     console.log(a)
//     var a = 10
// }
// alam()


// const user = {
//     username: "Noor Alam",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database")
//         console.log(`Username: ${this.username}`)
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails())


//
// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.logincCunt = loginCount;
//     this.isLoggedIn = isLoggedIn;
//     return this
// }
// const userOne = User("hitesh",12, true)
// const userTwo = new User("alam",15, true)
// console.log(userTwo)


//
function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()