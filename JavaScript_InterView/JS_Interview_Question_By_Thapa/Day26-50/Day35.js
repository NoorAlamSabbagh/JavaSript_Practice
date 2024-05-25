//Day35: isEmptyObject
const isEmptyObject = (obj) => {
    // return obj.length === 0 ? `it's empty` : `it's not empty`

//Method2 
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             return `it's not empty`;
//         }
//     }
//     return  `it's empty`;

//Method 3
return Object.keys(obj).length === 0;
}

console.log("Day35", isEmptyObject({name: "Vinod"})); //Output" "It is not empty"
console.log("Day35", ({name:""})); //Output" "It is empty"
console.log("Day35", isEmptyObject({keyWithNull: null})); //Output" "It is not empty"
console.log("Day35", isEmptyObject({keyWithUndefined: undefined})); //Output" "It is not empty"