//Day31 Password Validator; 
//Write a function called simple PasswordValidator that takes a single parameter;


const simplePasswordValidator = (password) => {
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for (let char of password) {
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            hasUpperCase = true;
        }else if(char.charCodeAt(0) >= 90 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;
        }else if(!isNaN(Number(char))){
            hasNumber =  true;

        }
    }
    if(!hasLowerCase || !hasUpperCase || !hasNumber || password.length<8){
        return false;
    }
    return true;
}
console.log(simplePasswordValidator("afkdsfafsf"));//Output: false
console.log(simplePasswordValidator("afkdsfafsf1"));//Output: false
console.log(simplePasswordValidator("afkdsfafsf1A"));//Output: true

