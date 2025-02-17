/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    console.log("map", map)
    for (let index = 0; index < nums.length; index++) {
        const pairTarget = target - nums[index];
        console.log("pairTarget", pairTarget)
      if (map.has(pairTarget)) {
        return [map.get(pairTarget), index];
      }
    const value =   map.set(nums[index], index); // Store the value and its index
    console.log("value", value);
    }
    return []; // Return an empty array if no solution is found
  };
  
console.log(twoSum([1, 3, 5, 6], 6));
console.log(twoSum([1, 3, 5, 8], 9));
console.log(twoSum([1, 3, 5, 6], 7));