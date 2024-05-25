//Day36: convert Object to Array and Vice Versa

const obj = {
    name : "Kodifiyer Thapa",
    age : 30,
    city : "pune",
}

let enteries = Object.entries(obj)
// console.log(enteries)
console.log("Day36", enteries.flat())

let newObj = Object.fromEntries(enteries);
console.log("Day36 newObj", newObj)