//Day28: Write a function called a truncateString thats take two String

const truncateString = (str, count) => {
    //Method (1)
    // if(count<=0){
    //     return str;
    // }else if(str.length>count){
    //     return str.slice(0, count).concat("...")
    // }

    //Method (2)
    return count<=0? str: str.slice(0, count).concat("...")
}
console.log("Day28", truncateString("A-tisket a-tasket A green and yellow basket", 8)); 