/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const newX = x.toString().split("")
   const reversedNewX = x.toString().split("").reverse()
   return newX.join("") === reversedNewX.join("") ? true : false;

};