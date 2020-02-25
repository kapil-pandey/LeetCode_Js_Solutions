/**
 * @Question Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 */

/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  if (x < 0)
    return false
  let rev = 0, temp = x
  while (x != 0 || x != -0) {
    rev = rev * 10 + x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
  }
  return temp === rev ? true : false
};