"use strict";
// const user = {
//     name: "John Doe",
//     email: "alam@gmail.com",
//     isActive: true,    
// }
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "12345",
    name: "Alam",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com"; // This is allowed because email is not a readonly property    
