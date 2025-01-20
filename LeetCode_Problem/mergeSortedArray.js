/**
 * Merge Sorted Array
 * @param {number[]} nums1 - The first sorted array, with enough space to hold elements of nums2.
 * @param {number} m - The number of initialized elements in nums1.
 * @param {number[]} nums2 - The second sorted array.
 * @param {number} n - The number of initialized elements in nums2.
 * @returns {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Pointers for nums1, nums2, and the merged array
    let i = m - 1; // Last initialized element of nums1
    let j = n - 1; // Last initialized element of nums2
    let k = m + n - 1; // Last position in nums1

    // Merge in reverse order
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

// Example usage:
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]
