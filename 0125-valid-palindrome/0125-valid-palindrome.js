/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newString = s.replace(/[^a-zA-Z0-9]/g, "").split("").filter(item => item !== " ").join("").toLowerCase().split("");
    const reversedString = newString.slice().reverse()
    return newString.join("") === reversedString.join("")
};