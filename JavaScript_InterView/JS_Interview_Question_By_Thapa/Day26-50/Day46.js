//Day46: Mobile Number Validation
const validateIndianMobileNumber = (number) => {
    return /^[6-9][\d]{9}$/.test(number);
}
console.log("Day46", validateIndianMobileNumber("9876543210"));
console.log("Day46", validateIndianMobileNumber("0123456789"));
console.log("Day46", validateIndianMobileNumber("897654321"));
console.log("Day46", validateIndianMobileNumber("78965432107"));