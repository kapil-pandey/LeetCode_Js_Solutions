/**
 * @Question https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let required = target - nums[i]
    if (required in map)
      return [map[required], i]
    map[nums[i]] = i
  }
}