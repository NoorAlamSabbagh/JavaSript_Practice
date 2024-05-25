//Day49: Date Validation


const isValidDate = (date) => {
    return /^(?:(?:(?:0[13578]|1[02])\/(?:0[1-9]|[12][0-9]|3[01])|(?:0[469]|11)\/(?:0[1-9]|[12][0-9]|30)|02\/(?:0[1-9]|1[0-9]|2[0-8]))\/(?:19|20)\d\d|02\/29\/(?:19|20)(?:0[48]|[2468][048]|[13579][26])|02\/29\/2000|02\/29\/2400)$/.test(date);
}

console.log(isValidDate("12/15/2021")); // true
console.log(isValidDate("02/29/2021")); // false
console.log(isValidDate("04/31/2020")); // false
console.log(isValidDate("01/01/1800")); // false
console.log(isValidDate("13/01/2000")); // false
console.log(isValidDate("12/31/2099")); // true
console.log(isValidDate("05/12/4500")); // false


