function triplet(arr, p) {
    let n = arr.length;
    let result = 0;
    
    // Step 1: Sort the array
    arr.sort((a, b) => a - b);

    // Step 2: Two-pointer approach
    let i = 0, j = 2;
    while (j < n) {
        if (i == j - 1) {
            j++;
            continue;
        }
        if (arr[j] - arr[i] > p) {
            i++;
        } else {
            let x = j - i;
            result += (x * (x - 1)) / 2;
            j++;
        }
    }
    
    return result;
}

const arr = [1, 3, 2, 5, 9];
const p = 4;
console.log(triplet(arr, p)); // Output: Correct count of triplets
