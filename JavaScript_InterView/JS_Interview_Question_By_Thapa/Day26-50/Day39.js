//Day39: Calculate Age by Dob


const calculateAge = (birthDate) => {
    let todayDate = new Date();
    birthDate = new Date(birthDate);
    // console.log("birthDate", birthDate)
    let age = todayDate.getFullYear() - birthDate.getFullYear();
    console.log(age)
    let monthDiff = todayDate.getMonth() - birthDate.getMonth();
    if(monthDiff < 0 || monthDiff === 0 && todayDate.getDate() < birthDate.getDate()){
        age--;
    }
    return age
}
console.log(calculateAge("1998-05-15"));    