/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const newString = s.split("");
  let currentPalindrome = "";

  for (let i = 0; i < newString.length; i++) {
    const palindromeOdd = expandFromCenter(newString, i, i);
    const palindromeEven = expandFromCenter(newString, i, i + 1);

    if (palindromeOdd.length > currentPalindrome.length) {
      currentPalindrome = palindromeOdd;
    }

    if (palindromeEven.length > currentPalindrome.length) {
      currentPalindrome = palindromeEven;
    }
  }

  return currentPalindrome;
};

function expandFromCenter(str, left, right) {
  let i = left;
  let j = right;

  while (i >= 0 && j < str.length && str[i] === str[j]) {
    i--;
    j++;
  }

  return str.slice(i + 1, j).join("");
}

