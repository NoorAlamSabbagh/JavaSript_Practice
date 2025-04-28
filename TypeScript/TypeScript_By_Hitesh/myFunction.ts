// function addTwo(num){
//     num.toUpperCase(); // This will throw an error if num is not a string
//     return num + 2;
// }
// addTwo(3); // 5


//
// function addTwo(num: number){
//     return num + 2;
// }
// addTwo(3); // 5

//
function getUpper(val: string) {
    return val.toUpperCase();
}
getUpper("hello");

//
function signUpUser(name: string, email: string, isPaid: boolean) {
    // Perform sign-up logic here
    console.log(`Name: ${name}, Email: ${email}, Is Paid: ${isPaid}`);
}
signUpUser("Noor", "noor@gmail.com", false); // This will throw an error because the types do not match

//
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
}
loginUser("h", "h@h.com")

export {}