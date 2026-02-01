// const user: (string| number)[] = ["Hitesh", 1, 2, 3, 4, 5];
const user: (string| number)[] = [1, "Alam"];
let tUser : [string, number, boolean]

tUser = ["Alam", 1, true]; //ok

let rgb: [number, number, number] = [255, 123, 122]; //ok
// let rgb2: [number, number, number] = [255, 123, 122, 0.8]; //ok

//
type User =  [number, string]
const newUser: User = [112, "alam@gmail.com"]
newUser[1] = "hc.com"
// newUser.push(true) //error

export {};