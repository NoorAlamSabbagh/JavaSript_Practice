//Day(24): Find Mode of array
function findMode(arr){
    counts = {};
    let maxNum = 0;
    let mode = 0;
    for(let element of arr){
        counts[element] = (counts[element] || 0) + 1;
        // console.log( counts[element]);
        if(counts[element]>maxNum){
            maxNum = counts[element];
            console.log("maxNum", maxNum);
            // mode = maxNum
            mode = element;
        };
    }
    console.log("counts",counts);
    return mode;
}

console.log(findMode([1, 2, 2, 3, 1, 4, 2]))//Output 2  