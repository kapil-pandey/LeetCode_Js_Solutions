/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  nums.map((itm, idx) => {
    if (itm === 0)
      for (let i = idx + 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
          let temp = nums[i]
          nums[i] = itm
          nums[idx] = temp
          break
        }
      }
  })
}