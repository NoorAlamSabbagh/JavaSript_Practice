//Day 42: Validate a Credit Card Number(Luhn Algorithim)

const validCreditCard = (str) => {
    //Initial Step
    str = str.replace(/\D/g, "");
    //Step 1: Reverse the digits;
    let reverseNum = "";
    for(let i=str.length-1; i>=0; i--){
        reverseNum = reverseNum + str[i];
    }
    console.log(reverseNum)

    //Step 2: Double every second digits
    let doubleNum = reverseNum.split("").map((currentDigits, index) => {
        if(index%2!==0){
            currentDigits = currentDigits*2
            if(currentDigits>9){
                currentDigits = currentDigits - 9;
            }else{
                currentDigits = currentDigits
            }
        }
        return currentDigits;
    }).reduce((accum, currElem) => accum +  Number(currElem), 0);

  console.log(doubleNum)
return doubleNum%10 ===0;
}
console.log("Day42", validCreditCard("4539 1488 0343 6467"));//Output: true 
console.log("Day42", validCreditCard("8273 1232 7352 0569")); //Output: false

 




