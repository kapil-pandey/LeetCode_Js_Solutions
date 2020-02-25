/**
 * @Question  https://leetcode.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {  //O(n^2) Solution
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


/* var moveZeroes = function(nums) {
 let length=nums.length
 for(let i=0;i<nums.length;i++){
     if(nums[i]===0){
         nums.splice(i--,1)
     }
 }
     let count=length - nums.length
 for(let j=0;j<count;j++){
     nums.push(0)
 }
     } */