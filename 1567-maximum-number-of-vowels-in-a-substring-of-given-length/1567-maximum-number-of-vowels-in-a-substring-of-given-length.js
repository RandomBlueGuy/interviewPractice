/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let maxVowelsPerString = 0;

    let vowelsPerString = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            vowelsPerString++;
        }
    }

    maxVowelsPerString = vowelsPerString;

    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i])) {
            vowelsPerString++;
        }
        if (vowels.has(s[i - k])) {
            vowelsPerString--;
        }
        maxVowelsPerString = Math.max(maxVowelsPerString, vowelsPerString);
    }

    return maxVowelsPerString;
};
