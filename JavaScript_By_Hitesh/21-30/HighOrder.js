// const arr = [1,2,3,4,5];

// for(const num of arr){
//     console.log(num)
// }


// const map = new Map();
// map.set('IN', "INDIA")
// map.set('USA', "Umited State Of America")
// map.set('Fr', "France")
// // console.log(map)

// for(const [key, value] of map){
//   console.log(key, ':-', value)
// }

//
// const object = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by apple"
// }

// for(const key in object){
//     console.log(`${key} shorcut belongs to ${object[key]}`);
// }


// const coding = ["js", "Java", "JavaScripts", "Node", "C++"];

// coding.forEach(function (val){
//     console.log(val)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// })



// const myNum =[1,2,3,4,5,6,7,8,9,10]
// // const newNum = myNum.filter((num)=>num>4)
// //     console.log(newNum)
// //
// const newNum = myNum.filter((num)=>{
// return num>4
// })
// console.log(newNum)

//
// const data = [
//     {
//         "name": "Sandra Schaefer",
//         "email": "Bethany12@yahoo.com",
//         "postCode": "65665",
//         "city": "Palm Harbor",
//         "country": "Slovakia (Slovak Republic)",
//         "phoneNumber": "379-607-0449",
//         "favouriteQuote": "Qui consectetur repellendus commodi."
//     },
//     {
//         "name": "Mark Veum",
//         "email": "Jedediah.Beer26@yahoo.com",
//         "postCode": "89859",
//         "city": "Montebello",
//         "country": "Myanmar",
//         "phoneNumber": "779.494.2905 x0531",
//         "favouriteQuote": "Corrupti assumenda enim alias suscipit maxime molestiae quis laboriosam."
//     },
// ]

// const dummyData = data.filter((info)=>info.name==="Mark Veum")
// console.log(dummyData)

//
const myNum = [1,2,3,4,5,6,7,8,9,10]
//  const newNums = myNum.map((num)=>{
//     return num+10
//  })
// 
 const  myNumbers= myNum
 .map((num)=> num*10)
 .map((num)=> num+1)
 .filter((num)=> num>4)
 console.log( myNumbers)