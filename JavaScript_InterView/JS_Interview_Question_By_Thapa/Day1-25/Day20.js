//Day (20) Write a function to reverse a string without using any built in methods or libararies

const reverseString = (str) => {
    let r_str="";
    for(let i=str.length-1; i>=0; i--){
    //  console.log(str[i]);
     r_str = r_str + str[i];
    }
    return r_str;
}
console.log(reverseString("hello"));