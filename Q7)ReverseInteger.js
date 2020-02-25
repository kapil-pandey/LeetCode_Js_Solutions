/**
 * @Question Given a 32-bit signed integer, reverse digits of an integer.
Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321
 */

/**
* @param {number} x
* @return {number}
*/
var reverse = function (x) {
  let num = 0
  while (x != 0 || x != -0) {
    num = num * 10 + x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
  }
  if (num < -Math.pow(2, 31) || num > Math.pow(2, 31) - 1)
    return 0
  else
    return num
};