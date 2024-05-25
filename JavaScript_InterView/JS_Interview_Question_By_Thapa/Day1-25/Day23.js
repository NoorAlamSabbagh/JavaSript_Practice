//(23)

const numbers = [1, 2, 2, 3, 1, 4, 2];
let counts = {};
for(let element of numbers){
    counts[element] = (counts[element] || 0) + 1; 
    
}
console.log(counts);
//Output
// {"1": 2, "2": 3, "3": 1, "4": 1}

//obj["name"] = "thapa";
//console.log(obj);  //Output: {name: "thapa"}
//console.log(obj["name"]); //Output: thapa



