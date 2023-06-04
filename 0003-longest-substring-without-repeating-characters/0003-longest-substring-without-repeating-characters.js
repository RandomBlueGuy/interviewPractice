/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
let start = 0;
    let end = 0;
    let maxLen = 0;
    let seen = new Set();

    while (end < s.length) {
        if (!seen.has(s[end])) {
            seen.add(s[end]);
            maxLen = Math.max(maxLen, end - start + 1);
            end++;
        } else {
            seen.delete(s[start]);
            start++;
        }
    }

    return maxLen;

};