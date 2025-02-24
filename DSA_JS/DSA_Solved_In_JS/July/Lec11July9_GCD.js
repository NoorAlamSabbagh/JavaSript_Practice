// const factor = () => {
//     let n = 12;
//     let f1 = 0, f2 = 0;
//     for (let i = 1; i * i <= n; i++) {
//         if(n%i === 0){
//             f1 = i;
//             f2 = n/f1;
//             console.log("f1", f1)
//             if(f1 != f2)
//             console.log("f2", f2)
//         }

//     }
// }
// factor();

//
//<==================Searching==============>
// const arr = (element) => {
//     console.log("Element", element);
//     for(let i=0; i<=element.length; i++){
//         console.log(`Element value ${element[i]}`)
//     }

// }
// let element = [2, 5, 10];
// arr(element);


//
// const arr = (element) => {
//     let n = element.length;
//     let x = 6;
//     let pos = -1;

//     for (let i = 0; i <= n; i++) {
//         if(element[i] === x){
//             pos = i
//             break;
//         }
//     }
//     if(pos !== -1){
//     console.log(`x is present at position ${pos}`);
//     }else{
//        console.log("x is not available in that array");
//     }
// }
// let element = [10, 5, 30, 2, 6, 7];
// arr(element);

//
//optimise above code
// const arr = (element) => {
//     let n = element.length;
//     let x = 30;
//     let i = 0;

//     for (i = 0; i < n; i++) {
//         if (element[i] === x) {
//             break;
//         }
//     }
//     if (i<n) {
//         console.log(`x is present at position ${i}`);
//     } else {
//         console.log("x is not available in that array");
//     }

// }
// let element = [10, 5, 30, 2, 6, 7];
// arr(element);

//
//<==========Binary Search ====================>
//Binary Search like words search in dictionary
//Elements should be shorted in Ascending and Descending order
const binarySearch = (arr) => {
    let x = 90;
    let l = 0;
    let r = arr.length;
    let m = 0;

    while(l<=r){
        m = Math.floor(l + (r-l)/2);
        if(arr[m] === x){
            break;
        }else if(arr[m]<x){
            l = m+1;
        }else{
            r = m-1;
        }
    }
    if(l>r){
        console.log("Elememnt is not present in the array");
    }else{
        console.log(`Elememnt is not present in the array at ${m}`);
    }

}
let arr = [2, 4, 5, 10, 20, 30, 60];
binarySearch(arr);