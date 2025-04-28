// const user = {
//     name: "John Doe",
//     email: "alam@gmail.com",
//     isActive: true,    
// }

// function createUser({name: string, isPaid: boolean}){
// }
// createUser({name: "Alam", isPaid: false});

// function createCourse(): {name: string, price: number} {
//     return {name: "reactjs", price: 399}
// }

//
// function createUser({name: string, isPaid: boolean}){
// }
// let newUser = {name: "Alam", isPaid: false, email: "alam@gmail.com"}
// createUser(newUser); // This will throw an error because newUser has an extra property 'email' that is not in the expected type


//
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {name: "", email: "", isActive: true}
}
createUser({name: "", email: "", isActive: true});

export {}