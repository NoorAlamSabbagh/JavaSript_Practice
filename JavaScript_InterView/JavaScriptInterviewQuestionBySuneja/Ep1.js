const users = [
    {
        id:1,
        name: "Noor Alam",
        age: "25",
        role: "Full Stack Web Developer",
        isActive: true,
    },
    {
        id:2,
        name: "Nehal",
        age: "26",
        role: "Developer",
        isActive: true,
    },
    {
        id:3,
        name: "Rajesh",
        age: "27",
        role: "Frontend Developer",
        isActive: false,
    },
    {
        id:4,
        name: "Faisal;",
        age: "29",
        role: "ReactDeveloper",
        isActive: false,
    },
    {
        id:5,
        name: "Sovichk",
        age: "24",
        role: "Backend Developer",
        isActive: false,
    }
];

const names = [];

// Solution 1
// for(i=0; i<users.length; i++){
//     if(users[i].isActive){
//         names.push(users[i].name);
//     }
// }
// console.log(names);
// // document.write(names);

//Sloution 2
// users.forEach((user)=>{
//     if(user.isActive){
//         names.push(user.name)
//    }
// })
// console.log(names);


//the map() method returns a array, whereasnthe forEach() method does not return a new array
//the forEach() method is similar to the for loop, but it does not have a return value

//Solution 3
// const names1 = users.filter((user)=>user.isActive).map((user)=>user.name)
// console.log(names1);

//solution 4
// users.sort((user1, user2)=> user1.age<user2.age ? 1 : -1);
// console.log(users)

//
// const names1 = users.filter((user)=>user.isActive)
// .sort((user1, user2) => user1.age<user2.age ? 1 : -1)
// .map((user)=>user.name)
// console.log("names1",names1);



