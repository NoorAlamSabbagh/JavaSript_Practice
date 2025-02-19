// function table(){
//     let n = 5;
//     // for(let i=1; i<=10; i++){
//     //     // console.log(n + "*" + i + "=" + n*i);
//     //     console.log(`${n} * ${i} = ${n * i}`);
//     // }

//     //
//     // let i =1;
//     // while(i<=10){
//     //     console.log(`${n} * ${i} = ${n * i}`);
//     //     i++;
//     // }

//     //
//     let i =1;
//     do{
//         console.log(`${n} * ${i} = ${n * i}`);
//         i++;
//     }while(i<=10);
// }
// table();


////
//<==================Array==================>
// Array is a collection of similar data types
// Array is a reference data type
// Array is a dynamic data structure
// Array is a collection of indexed elements
// Array is a collection of contiguous memory locations
//An array in JavaScript is a special variable that can hold multiple values in a single variable. 
// It is an ordered collection where elements are stored in an indexed manner, starting from 0.

//Root mean square
function rms(arr){
    let sum  = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i] * arr[i];
    }
    let result = Math.sqrt(sum/arr.length);
    return result;
}
console.log(rms([1,2,3,4]));