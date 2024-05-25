//Day43: FizzBuzz Challenge
const fizzbuzz = (sNum, eNum) => {
    let arr = [];
    for (let i = sNum; i <= eNum; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr.push("fizzBuzz");
        } else if (i % 3 === 0) {
            arr.push("fizz");
        } else if (i % 5 === 0) {
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
        // console.log(i);
    }
    return arr;
}
console.log("Day43", fizzbuzz(1, 15));// * Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
console.log("Day43", fizzbuzz(12, 20));//Output: ["Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]