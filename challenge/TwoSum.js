/**
 * @description This function takes an array of numbers and a target number,
 * and returns the indices of two numbers such that they add up to the target.
 * @param {number[]} nums - An array of numbers.
 * @param {number} target - The target sum.
 * @return {number[]} - The indices of two numbers from the nums array that add up to the target.
 */
const twoSum = function (nums, target) {
  // Iterate over each element in the nums array
  for (let i = 0; i < nums.length; i++) {
    // For each element, iterate over the rest of the elements in the nums array
    for (let j = i + 1; j < nums.length; j++) {
      // If the current element and one of the rest elements add up to the target
      if (nums[j] === target - nums[i]) {
        // Return the indices of these two elements
        return [i, j];
      }
    }
  }
};
