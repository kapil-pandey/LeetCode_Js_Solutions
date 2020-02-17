/**
 * @Question https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[index]) {
      nums[++index] = nums[i]
      nums[index] = nums[i]
    }
  }
  return index + 1
};