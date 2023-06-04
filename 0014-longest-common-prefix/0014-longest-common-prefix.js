/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let commonPrefix = strs[0].split("");

    for( let j = 0 ; j < strs.length ; j++){
        const currentWord = strs[j].split("");
        
        for( let i = 0 ; i <= currentWord.length ; i++){
            if(commonPrefix[i] !== currentWord[i]){
            commonPrefix.splice(i);
            break;
            }
        }
    }
    return commonPrefix.join("")
};