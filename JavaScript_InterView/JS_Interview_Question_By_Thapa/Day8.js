//(8)Factorial Finder

const factorial = (num) => {
    let fact = 1;
    for(let i=1; i<=num; i++){
    // console.log(i);
    fact = fact*i;
    }
    return fact;
}
console.log(factorial(5));//O/p: 120
console.log(factorial(0));//O/p: 1
console.log(factorial(3));//O/p: 6