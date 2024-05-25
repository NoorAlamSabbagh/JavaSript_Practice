//Day48: Validate Hex Color code
const validateHexColor = (hexColor) => {
    // return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hexColor);
    return /#(?:[0-9a-fA-F]{3}){1,2}\b/.test(hexColor);
}

console.log(validateHexColor("#a3c113")); //Expected Output: true
console.log(validateHexColor("#fff")); //Expected Output: true
console.log(validateHexColor("#1234567")); //Expected Output: false
console.log(validateHexColor("a3c113")); //Expected Output: false
console.log(validateHexColor("#g3c113")); //Expected Output: false