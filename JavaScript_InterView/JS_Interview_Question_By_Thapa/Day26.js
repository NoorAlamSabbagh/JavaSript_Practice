//(Day26): Write a function to find the nth fibonacci number

//f(n)= f(n-1)+f(n-2), where

const fibnonacci = (num) => {
    if(num<=1){
        return num;
    }else{
        return fibnonacci(num-1)+ fibnonacci(num-2)
    }
}
console.log("Day26", fibnonacci(0));//Output: 0
console.log("Day26", fibnonacci(1));//Output: 1
console.log("Day26", fibnonacci(2));//Output: 1
console.log("Day26", fibnonacci(3));