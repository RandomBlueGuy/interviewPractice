/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanEquivalent = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let res = 0;
    const newString = s.split("").map((item) => {
        return -romanEquivalent[item]
    })
    console.log(newString)
    for (let i = 0 ; i < s.length ; i++){
        newString[i] > newString[i + 1] ?  res = res + newString[i] :  res = res - newString[i]
    }

    return res
};