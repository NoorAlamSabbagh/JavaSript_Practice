/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
            console.log("nums", nums)
        }
    }
    console.log("nums i", i)
    return i;
};

// Example usage:
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let result1 = removeElement(nums1, val1);
console.log(result1); // Output: 2
console.log(nums1);   // Output: [2, 2, _, _] (the underscores represent irrelevant elements)

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let result2 = removeElement(nums2, val2);
console.log(result2); // Output: 5
console.log(nums2);   // Output: [0, 1, 3, 0, 4, _, _, _] (the underscores represent irrelevant elements)
